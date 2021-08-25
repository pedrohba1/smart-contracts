pragma solidity ^0.5.10;

import "./SignedSafeMath.sol";

contract VerySimpleFix {
    int balance;
    constructor(int i) public {
        balance = i;
    }
    using SignedSafeMath for int256;
    
    function inc() public {
        balance = balance.add(1);
    }
    
    function dec() public 
    {
        balance = balance.sub(1);
    }
    
    function check(int c) public returns (bool) {
        return c==balance;
    }
    
    function positive() public returns (bool) {
        return balance>0;
    }
    
    function getBalance() public returns (int) {
        return balance;
    }
    
}