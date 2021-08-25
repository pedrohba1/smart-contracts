const instance = artifacts.require("VerySimple");
const BN = web3.utils.BN;

module.exports = async function(done) {
    const contract = await instance.deployed();
    var balance = await contract.getBalance.call();

    console.log('balnaço total');
    console.log(balance.toString(2));
    console.log('bits ocupados:', balance.bitLength())

    await contract.inc();
    await contract.inc();


    balance = await contract.getBalance.call();
    console.log('balnaço total');
    console.log(balance.toString(2));
    console.log('bits ocupados:', balance.bitLength())

    done();
}


