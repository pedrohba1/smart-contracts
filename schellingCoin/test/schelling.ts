import { expect } from "chai";
import { ethers } from "hardhat";

describe("Schelling", function () {
  let instance;
  it("should deploy contract and send value for P", async function () {
    const [owner] = await ethers.getSigners();
    const schelling = await ethers.getContractFactory("Schelling");
    instance = await schelling.connect(owner).deploy({
      value: ethers.utils.parseUnits("1.0", "ether"),
    });
    await instance.deployed();
    expect(instance).to.not.be.null;
  });

  it("should allow users to enter as participants", async () => {});
  it("should collect votes from participants", async () => {});
  it("should ask participants to reveal votes", async () => {});
  it("should pay winners (majority)", async () => {});
});
