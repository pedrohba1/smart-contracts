// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HashContract {
    address public owner = msg.sender;
    uint256 public last_completed_migration;

    function HashWithNonce(bytes32 nonce, bytes1 v) public returns (bytes32) {
        bytes32 ver = sha256(abi.encodePacked(nonce, v));
        return ver;
    }

    function SimpleHash(string memory val) public returns (bytes32) {
        bytes32 h = sha256(abi.encodePacked(val));
        return h;
    }
}
