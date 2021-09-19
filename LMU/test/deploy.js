const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deploy do LMU", function () {
  it("should deploy contract", async function () {
    const [owner, addr1] = await ethers.getSigners();
    

    const LMU = await ethers.getContractFactory("LMU");
    
    const lmu = await LMU.deploy(5, {value: 10});
    await lmu.deployed();

    await lmu.connect(addr1).fazLance({value: 40})

    // console.log(BigNumber.from(await owner.getBalance()).toString());
    // for (const account of accounts) {
    //   console.log(account.address);
    // }
  });
});
