//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

library CommitLib {
    enum CommitStatesType {
        Waiting,
        Revealed
    }

    struct CommitType {
        bytes32 commited;
        uint256 value;
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
        string memory nonce,
        uint256 val
    ) public {
        require(
            c.myState == CommitStatesType.Waiting,
            "commit was already revealed"
        );
        bytes32 ver = sha256(abi.encodePacked(nonce, val));
        c.myState = CommitStatesType.Revealed;
        if (ver == c.commited) {
            c.verified = true;
            c.value = val;
        } else {
            revert("value does not match commit");
        }
    }

    function isRevealed(CommitType storage c) public view returns (bool) {
        return c.verified;
    }

    function showCommit(CommitType storage c) public view returns (bytes32) {
        return c.commited;
    }

    function getValue(CommitType storage c) public view returns (uint256) {
        require(
            c.myState == CommitStatesType.Revealed,
            "commit not revealed yet"
        );
        require(c.verified == true, "commit does not match");
        return c.value;
    }
}
