pragma solidity >=0.4.25 <0.6.0;

library SimpleCommit {
    enum CommitStatesType {
        Waiting,
        Revealed
    }

    struct CommitType {
        bytes32 commited;
        bytes1 value;
        bool verified;
        CommitStatesType myState;
    }

    function commit(CommitType storage c, bytes32 h) public {
        c.commited = h;
        c.verified = false;
        c.myState = CommitStatesType.Waiting;
    }

    function reveal(
        CommitType storage c,
        bytes32 nonce,
        bytes1 v
    ) public {
        require(c.myState == CommitStatesType.Waiting);
        bytes32 ver = sha256(abi.encodePacked(nonce, v));
        c.myState = CommitStatesType.Revealed;
        if (ver == c.commited) {
            c.verified = true;
            c.value = v;
        }
    }


    function hashData(string memory val, string memory nonce) public pure returns (bytes32) {
        return sha256(abi.encodePacked(nonce, val));
    }
    
    function isCorrect(CommitType storage c) public view returns (bool) {
        require(c.myState == CommitStatesType.Revealed);
        return c.verified;
    }

    function getValue(CommitType storage c) public view returns (bytes1) {
        require(c.myState == CommitStatesType.Revealed);
        require(c.verified == true);
        return c.value;
    }
}


