const SimpleCommit = artifacts.require("SimpleCommit");
const ParImpar = artifacts.require("ParImpar");

module.exports = function (deployer) {
  deployer.deploy(SimpleCommit);
  deployer.link(SimpleCommit, ParImpar);
  deployer.deploy(ParImpar);
};
