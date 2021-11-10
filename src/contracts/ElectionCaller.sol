//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Election.sol";

contract ElectionCaller {
    address[] public electionList;
    address public elecAddr;
    address private owner;

    // Only charge to create election
    modifier initPrice(uint256 _price) {
        require(msg.value >= _price, "Not enough Ether supplied to create vote");
        _;
        if (msg.value > _price) {
            payable(msg.sender).transfer(msg.value - _price);
        }
    }

    constructor() {
        // Ideally add owner-only admin function of deleting elections
        owner = msg.sender;
    }

    function createElection() public payable initPrice(0 gwei) returns (Election) {
        Election e = new Election(msg.sender);
        elecAddr = address(e);
        electionList.push(elecAddr);

        return e;
    }

    // For later use:
    // To call Election instance function:
    // Election(<address of Election instance>).function(<parameters>);

}