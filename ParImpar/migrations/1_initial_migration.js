const SimpleCommit = artifacts.require("SimpleCommit");
const ParImpar = artifacts.require("ParImpar");

module.exports = function (deployer, network, accounts) {
  startTime = Date.now();
  endTime = startTime + 10000;

  deployer.deploy(SimpleCommit);
  deployer.link(SimpleCommit, ParImpar);
  deployer.deploy(ParImpar, accounts[0], accounts[1], startTime, endTime);
};
