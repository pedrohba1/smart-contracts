const instance = artifacts.require("VerySimple");

contract("VerySimple", accounts =>{

    it('deveria fazer overflow', async () => {
        const contract = await instance.deployed();
        var balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal antes do overflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados antes da tentativa de overflow:', balance.bitLength());
        await contract.inc();
        
        balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal depois do overflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados depois da tentativa de overflow:', balance.bitLength());
        assert.equal(balance.bitLength(), 256);
    })

    it('deveria fazer underflow', async () => {
        const contract = await instance.deployed();
        var balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal antes do underflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados antes da tentativa de underflow:', balance.bitLength());
        await contract.dec();
        
        balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal depois do underflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados depois da tentativa de underflow:', balance.bitLength());
        assert.equal(balance.bitLength(), 255);
    })
});