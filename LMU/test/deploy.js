const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deploy do LMU", function () {
  it("should deploy contract", async function () {
    const LMU = await ethers.getContractFactory("LMU");
    const [owner] = await ethers.getSigners();

    const lmu = await LMU.deploy(5);
    const deployed = await lmu.deployed();

    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
      console.log(account.address);
    }
  });
});
