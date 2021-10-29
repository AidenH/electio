//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "./Election.sol";

contract ElectionCaller {
    address[] electionList;
    address private elecAddr;
    address private owner;

    // Only charge to create election
    modifier initPrice(uint256 _amount) {
        require(msg.value >= _amount, "Not enough Eth available to call vote.");
        _;
    }

    constructor() {
        // Ideally add owner-only admin function of deleting elections
        owner = msg.sender;
    }

    function createElection() public payable initPrice(0 gwei) returns (address[] memory) {
        //elecAddr = address(new Election(msg.sender));
        electionList.push(address(new Election(msg.sender)));

        return electionList;
    }

    // -For later use-
    // To call Election instance function:
    // Election(elecAddr).placeVote(msg.sender, );
    // Election(<address of>).function(<parameters>)

}