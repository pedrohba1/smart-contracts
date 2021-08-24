
module.exports = async function(done) {
    var  myContract = artifacts.require("VerySimple");
    const accounts = await web3.eth.getAccounts();

    console.log('endreços disponíveis para uso', accounts);
    const instance = await myContract.deployed()    
    
    //pega o balanço atual.  Leituras são feitas no call. escritas são feitas no transaction
    var balance = await instance.getBalance.call();
    console.log('balanço antes: ', balance.toNumber());

    await instance.inc();

    balance = await instance.getBalance.call();
    console.log('balanço depois', balance.toNumber());

    
    done();
}


