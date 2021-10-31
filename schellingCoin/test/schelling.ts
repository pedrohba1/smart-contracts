import { expect } from "chai";
import { ethers } from "hardhat";
import * as CryptoJS from "crypto-js";
import { Schelling } from "../types";

function createCommit(message: string) {
  const hash = CryptoJS.SHA256(message);
  const buffer = Buffer.from(hash.toString(CryptoJS.enc.Hex), "hex");
  const array = new Uint8Array(buffer);
  return array;
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
    schellingInstance = await schelling.connect(owner).deploy({
      value: ethers.utils.parseUnits("5.0", "ether"),
    });
    await schellingInstance.deployed();
    expect(schellingInstance).to.not.be.null;
  });

  it("should allow users to enter as participants", async () => {
    const accounts = await ethers.getSigners();
    for (let i = 0; i < 10; i++) {
      const hash = i > 5 ? createCommit("0") : createCommit("1"); // vai votar em sim
      schellingInstance.connect(accounts[i]).commit(hash);
    }
  });

  it("should be able to see a commit", async () => {});
  it("should collect votes from participants", async () => {});
  it("should ask participants to reveal votes", async () => {});
  it("should pay winners (majority)", async () => {});
});
