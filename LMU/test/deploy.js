const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deploy do LMU", function () {
  it("should deploy contract", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    

    const LMU = await ethers.getContractFactory("LMU");
    
    const lmu = await LMU.deploy(5, {value: 10});
    await lmu.deployed();

    await lmu.connect(addr1).fazLance({value: 100})
    await lmu.connect(addr2).fazLance({value: 90})
    await lmu.connect(addr3).fazLance({value: 80})

    // console.log(BigNumber.from(await owner.getBalance()).toString());
    // for (const account of accounts) {
    //   console.log(account.address);
    // }
  });
});
