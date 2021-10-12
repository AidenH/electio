//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "./Election.sol";

contract ElectionCaller {
    address[] electionList;
    address private elecAddr;
    address private owner;

    // Only charge to create election
    modifier initPrice {
        require(msg.value == 0, "Not enough Eth available to call vote.");
        _;
    }

    constructor() {
        // Ideally add owner-only admin function of deleting elections
        owner = msg.sender;
    }

    function createElection() public payable initPrice returns (address) {
        elecAddr = address(new Election(msg.sender));
        electionList.push(elecAddr);

        return elecAddr;
    }

    // -For later use-
    // To call Election instance function:
    // Election(elecAddr).placeVote(msg.sender, );
    // Election(<address of>).function(<parameters>)

}