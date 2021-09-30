pragma solidity >=0.4.25 <0.6.0;

library SimpleCommit {
    enum CommitStatesType {
        Waiting,
        Revealed
    }

    struct CommitType {
        address payable participant_address;
        bytes32 commited;
        uint256 value;
        bool verified;
        CommitStatesType myState;
    }

    function commit(CommitType storage c, bytes32 h) public {
        c.commited = h;
        c.participant_address = msg.sender;
        c.verified = false;
        c.myState = CommitStatesType.Waiting;
    }

    function reveal(
        CommitType storage c,
        string memory nonce,
        uint256 val
    ) public {
        require(msg.sender == c.participant_address, "participante só pode revelar uma informação que ele assinar");
        require(c.myState == CommitStatesType.Waiting);
        bytes32 ver = sha256(abi.encodePacked(nonce, val));
        c.myState = CommitStatesType.Revealed;
        if (ver == c.commited) {
            c.verified = true;
            c.value = val;
        } else {
            revert("valor revelado não bate com compromisso");
        }
    }

    function isCorrect(CommitType storage c) public view returns (bool) {
        return c.verified;
    }

    function getValue(CommitType storage c) public view returns (uint256) {
        require(c.myState == CommitStatesType.Revealed, "commit ainda não foi revelado");
        require(c.verified == true);
        return c.value;
    }
}


