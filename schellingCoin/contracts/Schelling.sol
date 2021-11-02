//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./CommitLib.sol";
import "hardhat/console.sol";

contract Schelling {
    using CommitLib for CommitLib.CommitType;
    uint256 private prize;
    address private owner;
    string private votingCase;
    uint256 private yesVoters = 0;
    uint256 private noVoters = 0;

    enum PossibleVotes {
        yes,
        no
    }

    enum RevealingState {
        waiting,
        canReveal
    }
    
    RevealingState private state;
    PossibleVotes private majority;


    struct Participant {
        CommitLib.CommitType sc;
    }

    mapping(address => Participant) private participants;

    constructor(string memory _votingCase) payable {
        owner = msg.sender;
        prize = msg.value;
        state = RevealingState.waiting;
        votingCase = _votingCase;
    }

   modifier onlyOwner {
      require(msg.sender == owner, "you are not the owner");
      _;
   }

    // coletar os votos
    function commit(bytes32 h) public returns (bool) {
        require(state == RevealingState.waiting, "it's time to reveal");
        participants[msg.sender].sc.commit(h);
        return true;
    }

    // owner coloca estado como "canReveal"
    function setRevealingState() public onlyOwner {
        state = RevealingState.canReveal;
    }


    // particiapntes revelam os votos
    function reveal (string memory nonce, uint256 val) public{
        participants[msg.sender].sc.reveal(nonce, val);
        if(participants[msg.sender].sc.value == 1) {
            noVoters += 1;
        }
        if(participants[msg.sender].sc.value == 0) {
            yesVoters += 1;
        }
    }
    
    //TODO: função que checa quem é a maioria
    function getMajority() public view returns(PossibleVotes) {
        require(yesVoters != noVoters, "tie");
        if(yesVoters > noVoters){
            return PossibleVotes.yes;
        }
        else {
            return PossibleVotes.no;
        }
    }



    //TODO: função que distribui o prêmio igualmente entre a maioria
    function distribute() public {



    }




    // lucro(?) O dinheiro vai ser dividido igualmente entre participantes, então vai sobrar um poquinho
    // vou fazer o pouquinho que sobrar voltar pro owner
    // TODO: funcao view para saber o resultado

    // função auxiliar para ver o valor commitado
    function seeCommit() public view returns (bytes32) {
        return participants[msg.sender].sc.showCommit();
    }


    // ESSA FUNÇÃO NÃO VAI SER USADA PARA GERAR O COMMIT PORQUE NÃO É 100% GARANTIA QUE O
    // COMMIT VAI SER MANTIDO EM SEGREDO 
    // eu só deixei ela aqui para testar se eu conseguia gerar o mesh hash dessa função em javacript
    function generateHash(string memory nonce, uint256 val) public pure returns (bytes32){
        return sha256(abi.encodePacked(nonce, val));
    }
    

    // função auxiliar para mostrar o estado atual
    function showCurrentState() public view returns (RevealingState){
        return state;
    }
}
