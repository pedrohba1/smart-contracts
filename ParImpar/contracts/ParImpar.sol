pragma solidity >=0.4.25 <0.6.0;

import "./SimpleCommit.sol";

contract ParImpar {
    using SimpleCommit for SimpleCommit.CommitType;
   
    // Para não esquecer qual é qual:
    //Odd é ímpar
    // Even é par
    enum ChosenPlay {
        Even,
        Odd 
    }

    struct Participant {
        address payable _address;
        ChosenPlay playOfChoice;
        bool hasChosen;
    }

    Participant participant1;
    Participant participant2;
    uint256 funds = 0;
   event Deposit(address indexed _from, string _winner);



    bool ok;
    SimpleCommit.CommitType sc1;
    SimpleCommit.CommitType sc2;

    // no deploy do contrato os dois participantes são colocados para 
    // evitar que terceiros participem só para atrapalhar o jogo
    constructor(address payable _p1, address payable _p2) public {
        ok = false;
        participant1._address = _p1;
        participant2._address = _p2;
    }

      modifier isParticipant {
        require (msg.sender == participant1._address|| msg.sender == participant2._address,
         "msg.sender precisa ser um dos particiapntes");
      _;
   }    
    
    
    function choosePlay(string memory s) public isParticipant{
        require(keccak256(abi.encodePacked((s))) ==keccak256(abi.encodePacked(("PAR"))) 
            || keccak256(abi.encodePacked((s))) == keccak256(abi.encodePacked(("IMPAR"))),
            "jogadas escolhidas só podem ser PAR ou IMPAR"
        );      
        if(keccak256(abi.encodePacked((s))) == keccak256(abi.encodePacked(("PAR")))){
            if (msg.sender == participant1._address){
                if(participant2.hasChosen){
                    require((participant2.playOfChoice != ChosenPlay.Even), 
                    "participantes não podem escolher o mesmo valor");
                }
                participant1.playOfChoice = ChosenPlay.Even;
                participant1.hasChosen = true;
            }
            if (msg.sender == participant2._address){
                if(participant1.hasChosen){
                    require(participant1.playOfChoice != ChosenPlay.Even, 
                    "participantes não podem escolher o mesmo valor");
                }
                participant2.playOfChoice = ChosenPlay.Even;
                participant2.hasChosen = true;
            }
        }  
        if(keccak256(abi.encodePacked((s))) == keccak256(abi.encodePacked(("IMPAR")))){
            if (msg.sender == participant1._address){
                if(participant2.hasChosen){
                    require(participant2.playOfChoice != ChosenPlay.Odd, 
                    "participantes não podem escolher o mesmo valor");
                }
                participant1.playOfChoice = ChosenPlay.Odd;
                participant1.hasChosen = true;
            }
            if (msg.sender == participant2._address){
                if(participant1.hasChosen){
                    require(participant1.playOfChoice != ChosenPlay.Odd, 
                    "participantes não podem escolher o mesmo valor");
                }
                participant2.playOfChoice = ChosenPlay.Odd;
                participant2.hasChosen = true;
            }
        }  
    }

    function doCommit(bytes32 h) public payable isParticipant{
        require(participant1.hasChosen && participant2.hasChosen, 
        "Ambos participantes precisam ter selecionada um tipo de jogada");
        require(msg.value >0, "pariticpantes devem dar algum valor ao contrato");
        if (msg.sender == participant1._address){
            sc1.commit(h);
        }
        if (msg.sender == participant2._address){
            sc2.commit(h);
        }
        funds += msg.value;
    }
    
    function doReveal( string memory nonce, uint256 v) public isParticipant{
        if (msg.sender == participant1._address){
            sc1.reveal(nonce, v);
        }
        if (msg.sender == participant2._address){
            sc2.reveal(nonce,v);
        }
        if(sc1.isCorrect() && sc2.isCorrect()){
            ok = true;
        }
    }


    function distributeFunds() public returns (uint256)  {
        require(ok == true, "os dois commits ainda não foram revelados");
         uint256 total = sc1.getValue() + sc2.getValue();
        if (total%2 == 0){
            if(participant1.playOfChoice == ChosenPlay.Even){
                participant1._address.transfer(funds);
            }
            if(participant2.playOfChoice == ChosenPlay.Even){
                participant2._address.transfer(funds);
            }
        } else {
            if(participant1.playOfChoice == ChosenPlay.Odd){
                participant1._address.transfer(funds);
            }
            if(participant2.playOfChoice == ChosenPlay.Odd){
                participant2._address.transfer(funds);
            }
        }
    }

    // eu criei essa função auxiliar para criar a hash direto no solidity e ele me devolver no javascript
    // acontece que criar uma hash no javascript que seja igual no solidity é um tanto chato, então 
    // isso daqui diminui a dor de cabeça. Fazendo uma call para essa função do tipo pure não vai fazer uma
    // transaction, a função só será executada no nodo diretamente conectado.
    // Logo, não há o risco de um dos participantes saber os valores do outro, em uma situação normal
    // onde nenhum dos dois tem acesso ao nodo.
    function hashData(string memory nonce, uint256 val ) public pure returns (bytes32) {
        return sha256(abi.encodePacked(nonce, val));
    }
    
    function getResult() public view returns (bool) {
        return ok;
    }
}
