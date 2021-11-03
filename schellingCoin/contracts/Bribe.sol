//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Schelling.sol";

contract Bribe {

    Schelling private sch;
    uint256 public toReceiveBribe;
    uint256 public bribe;
    mapping(address => bool) private participants;
    uint256 public numParticipants;

    enum RevealingState {
        waiting,
        canReveal,
        finished
    }

    constructor(address _schellingAddress, uint256 _toBribe) payable {
        sch = Schelling(_schellingAddress);
        toReceiveBribe = _toBribe;
        bribe = msg.value;
    }

    function acceptBribe() public {
        participants[msg.sender] = true;
        numParticipants += 1;
    }

    function claimBribe() public {
        require(uint256(sch.showCurrentState()) == 2, "not revealing state");
        uint256 value = sch.geCommitValue(msg.sender);
        if (value == toReceiveBribe) {
            uint256 sendValue = bribe / numParticipants;
            payable(msg.sender).transfer(sendValue);
        } else {
            revert("you did not act accordingly");
        }
    }
}
