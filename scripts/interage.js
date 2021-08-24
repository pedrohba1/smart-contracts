
module.exports = async function(callback) {
    var  myContract = artifacts.require("VerySimple");
    const instance = await myContract.deployed()    
    console.log(instance);
    
    //pega o balanço atual.  Leituras são feitas no call. escritas são feitas no transaction
    const balance = await instance.getBalance.call();
    console.log(balance.toString());

    

}


/* const YourContract = artifacts.require("../contracts/VerySimple");
const [account0, account1, account2] = web3.eth.accounts;


web3.eth.defaultAccount = account0;

const contract = web3.eth.contract(YourContract.abi).at(YourContract.address);

 *///If this has parameters then use: contract.methodYouWantToCall(param1, param2);