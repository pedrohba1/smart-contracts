const SimpleCommit = artifacts.require("SimpleCommit");
const EvenOddGame = artifacts.require("EvenOddGame");

module.exports = function (deployer, network, accounts) {
  startTime = Date.now();
  endTime = startTime + 10000;

  deployer.deploy(SimpleCommit);
  deployer.link(SimpleCommit, EvenOddGame);
  deployer.deploy(EvenOddGame, accounts[0], accounts[1], startTime, endTime);
};
