require('dotenv').config({path: '../../../.env'})
var Web3 = require('web3');

address = process.argv[2];
if(!address){
    throw "endereço está faltando"
}

var web3 = new Web3(new Web3.providers.HttpProvider(
    `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`
));

(async () =>{
    var balance = await web3.eth.getBalance(address);
    console.log(web3.utils.fromWei(balance,'ether'))
})()
