const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deploy do LMU", function () {


  let lmu;
  it("deveria fazer deploy do contrato", async function () {

    const LMU = await ethers.getContractFactory("LMU");
    
    lmu = await LMU.deploy(5, {value: 10});
    await lmu.deployed();
    // const accounts = await ethers.getSigners();
    // for (const account of accounts) {
    //   console.log(account.address);
    // }
  });

  it('deveria fazer lances', async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    await lmu.connect(addr1).fazLance({value: 1})

    let menorLance = await lmu.connect(addr1).pegaMLU();
    console.log('menor lance', menorLance.toString());
    
    await lmu.connect(addr2).fazLance({value: 1})

    menorLance = await lmu.connect(addr1).pegaMLU();
    console.log('menor lance', menorLance.toString());

    await lmu.connect(addr3).fazLance({value: 2})

    menorLance = await lmu.connect(addr1).pegaMLU();
    console.log('menor lance', menorLance.toString());

    await lmu.connect(addr2).fazLance({value: 3})

    menorLance = await lmu.connect(addr1).pegaMLU();
    console.log('menor lance', menorLance.toString());

    await lmu.connect(addr1).fazLance({value: 2})

    menorLance = await lmu.connect(addr1).pegaMLU();
    console.log('menor lance', menorLance.toString());

  });





});
