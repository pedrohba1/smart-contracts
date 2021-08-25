const VerySimpleFix = artifacts.require("VerySimpleFix");
const BN = web3.utils.BN;

module.exports = async function (deployer) {
    var a = new BN(2);
    var b = new BN(255);
    var MAX_INT = a.pow(b).sub(new BN(1));
    deployer.deploy(VerySimpleFix, MAX_INT);
};