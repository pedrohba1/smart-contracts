const verySimple = artifacts.require("VerySimple");

module.exports = function (deployer) {
  deployer.deploy(verySimple, 10);
};
