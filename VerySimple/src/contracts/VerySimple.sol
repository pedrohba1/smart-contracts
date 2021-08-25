pragma solidity ^0.5.10;


contract VerySimple {
    int balance;
    constructor(int i) public {
        balance = i;
    }
    
    function inc() public {
        balance = balance +1; 
    }
    
    function dec() public 
    {
        balance = balance -1;
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