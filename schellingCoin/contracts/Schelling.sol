//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./CommitLib.sol";

contract Schelling {
    using CommitLib for CommitLib.CommitType;
    uint256 P;

    enum possibleVotes {
        yes,
        no
    }

    struct Participant {
        CommitLib.CommitType sc;
    }

    mapping(address => Participant) participants;

    constructor() payable {
        P = msg.value;
    }

    function commit(bytes32 h) public returns (bool) {
        participants[msg.sender].sc.commit(h);
        return true;
    }

    // coletar os votos
    // revelar os votos
    // pagar os vencedores
    // lucro(?) O dinheiro vai ser dividido igualmente entre participantes, então vai sobrar um poquinho
    // vou fazer o pouquinho que sobrar voltar pro owner
    // funcao view para saber o resultado

    function seeCommit() public returns (bytes32) {
        return participants[msg.sender].sc.showCommit();
    }
}
