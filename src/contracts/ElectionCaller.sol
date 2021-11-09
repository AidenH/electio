//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Election.sol";

contract ElectionCaller {
    address[] public electionList;
    address public elecAddr;
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

    function createElection() public payable initPrice(0 gwei) returns (Election) {
        Election e = new Election(msg.sender);
        elecAddr = address(e);
        electionList.push(elecAddr);

        return e;
    }

    // -For later use-
    // To call Election instance function:
    // Election(elecAddr).placeVote(msg.sender, );
    // Election(<address of>).function(<parameters>)

}