
module.exports = async function(done) {
    const walletAddress = "0x8332144cD7C87b8aF5a1b16fc186025166E01c83";
    var balance =  await web3.eth.getBalance(walletAddress); 
    console.log(balance);
    done();
}


