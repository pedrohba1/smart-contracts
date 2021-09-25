const SimpleCommit = artifacts.require("SimpleCommit");
const TestSimpleCommit = artifacts.require("TestSimpleCommit");

module.exports = function (deployer) {
  deployer.deploy(SimpleCommit);
  deployer.link(SimpleCommit, TestSimpleCommit);
  deployer.deploy(TestSimpleCommit);
};
