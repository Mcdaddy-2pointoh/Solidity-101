pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] participants public;

    function enter (string participantAddress) {
        participants.push(participantAddress);
    } 

    function winner ()


}