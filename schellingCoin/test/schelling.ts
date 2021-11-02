import { expect } from "chai";
import { ethers } from "hardhat";
import { Schelling } from "../types";

const { utils } = ethers;

function createCommit(nonce: string, message: number) {
  return utils.soliditySha256(["string", "uint"], [nonce, message]);
}

describe("Schelling", function () {
  let schellingInstance: Schelling;

  it("should deploy contract and send value for P", async function () {
    const [owner] = await ethers.getSigners();
    const commitLib = await ethers.getContractFactory("CommitLib");
    const commitLibInstance = await commitLib.connect(owner).deploy();
    await commitLibInstance.deployed();
    const schelling = await ethers.getContractFactory("Schelling", {
      libraries: {
        CommitLib: commitLibInstance.address,
      },
    });
    schellingInstance = await schelling
      .connect(owner)
      .deploy(
        "O contratante da empresa ACME deveria pagar o seguro? (EXEMPLO)",
        {
          value: ethers.utils.parseUnits("5.0", "ether"),
        }
      );
    await schellingInstance.deployed();
    expect(schellingInstance).to.not.be.null;
  });

  it("should generate same hash in js as from solidity", async () => {
    const commitInJs = createCommit("nonce1", 1);
    const commitInSolidity = await schellingInstance.generateHash("nonce1", 1);
    expect(commitInSolidity).to.be.equal(commitInJs);
  });

  it("should allow participants to commit", async () => {
    const accounts = await ethers.getSigners();
    for (let i = 0; i < 10; i++) {
      const hash =
        i > 5 ? createCommit("nonce1", 1) : createCommit("nonce1", 0); // vai votar em sim
      schellingInstance.connect(accounts[i]).commit(hash);
    }
  });

  it("should be able to see a commit", async () => {
    const [owner] = await ethers.getSigners();
    const res = await schellingInstance.connect(owner).seeCommit();
    expect(res).to.be.a.string;
  });

  it("should have owner to set canReveal", async () => {
    const [owner] = await ethers.getSigners();
    await schellingInstance.connect(owner).setRevealingState();
    const res = await schellingInstance.showCurrentState();

    // Se for 1, quer dizer que o Enum RevealingState está no estado canReveal
    expect(res).to.be.equal(1);
  });

  it("participants should reveal", async () => {
    const accounts = await ethers.getSigners();
    for (let i = 0; i < 10; i++) {
      i > 5
        ? await schellingInstance.connect(accounts[i]).reveal("nonce1", 1)
        : await schellingInstance.connect(accounts[i]).reveal("nonce1", 0);
    }
    const yesVotes = await schellingInstance.getYesVoters();
    const noVotes = await schellingInstance.getNoVoters();
    expect(yesVotes).to.be.equal(6);
    expect(noVotes).to.be.equal(4);
  });

  it("should be able to see majority votes", async () => {
    const majority = await schellingInstance.getMajority();
    expect(majority).to.be.oneOf([0, 1]);
  });

  it("owner should be able to set finished state", async () => {
    const [owner] = await ethers.getSigners();
    await schellingInstance.connect(owner).setFinishedState();
    const state = await schellingInstance.showCurrentState();
    expect(state).to.be.equal(2);
  });

  it("voters that didn't vote as majority shouldn't be able to claim reward", async () => {
    const accounts = await ethers.getSigners();
    await expect(
      schellingInstance.connect(accounts[6]).claimReward()
    ).to.be.revertedWith("vote is not same as majority");
  });

  it("participants should be able to claim funds", async () => {
    const accounts = await ethers.getSigners();
    await schellingInstance.connect(accounts[1]).claimReward();
  });
});
