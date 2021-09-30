const EvenOddGame = artifacts.require("EvenOddGame");
const truffleAssert = require('truffle-assertions');


const nonce1 = "13396leet51523nbhd345noce";
const nonce2 = "1339123213126leet686noce";

contract("Testes negativos do EvenOddGame", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await EvenOddGame.deployed();
        console.log(instance.address);
    });


    it(`terceiros não deveriam ser capazes de interagir`, async () =>{
        const instance = await EvenOddGame.deployed();
        truffleAssert.fails(
            instance.chooseEven({from: accounts[3]}),
            truffleAssert.ErrorType.REVERT
        );
    });

    it(`ambos escolherem a mesma jogada não deveria ser possível`, async () =>{
        const instance = await EvenOddGame.deployed();
        await instance.chooseEven({from: accounts[0]});
        truffleAssert.fails(
            instance.chooseEven({from: accounts[1]}),
            truffleAssert.ErrorType.REVERT
        );
    });
});