// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const commitLib = await ethers.getContractFactory("CommitLib");
  const commitLibInstance = await commitLib.connect(owner).deploy();
  await commitLibInstance.deployed();
  console.log(commitLibInstance.address);
  const schelling = await ethers.getContractFactory("Schelling", {
    libraries: {
      CommitLib: commitLibInstance.address,
    },
  });
  const schellingInstance = await schelling
    .connect(owner)
    .deploy("O contratante da empresa ACME deveria pagar o seguro? (EXEMPLO)", {
      value: ethers.utils.parseUnits("1.0", "ether"),
    });
  await schellingInstance.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
