const ParImpar = artifacts.require("ParImpar");
const truffleAssert = require('truffle-assertions');


const nonce1 = "13396leet51523nbhd345noce";
const nonce2 = "1339123213126leet686noce";

contract("Testes negativos do ParImpar", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await ParImpar.deployed();
        console.log(instance.address);
    });

    it(`ambos escolherem a mesma jogada não deveria ser possível`, async () =>{
        const instance = await ParImpar.deployed();
        await instance.choosePlay("PAR", {from: accounts[0]});
        truffleAssert.fails(
            instance.choosePlay("PAR", {from: accounts[1]}),
            truffleAssert.ErrorType.REVERT
        );
    });
});