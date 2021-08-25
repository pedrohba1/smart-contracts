
module.exports = async function(done) {
    var  myContract = artifacts.require("VerySimple");
    const accounts = await web3.eth.getAccounts();

    console.log('endreços disponíveis para uso', accounts);
    const instance = await myContract.deployed()    


    //o contrato começa no MAX_INT. Depois de um incremento, temos um overflow.
    await instance.inc();

    done();
}


