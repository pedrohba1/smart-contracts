const SimpleCommit = artifacts.require("SimpleCommit");
const ParImpar = artifacts.require("ParImpar");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(SimpleCommit);
  deployer.link(SimpleCommit, ParImpar);
  deployer.deploy(ParImpar, accounts[0], accounts[1]);
};
