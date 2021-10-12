//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "./Election.sol";

contract ElectionCaller {
    address[] electionList;
    address private elecAddr;
    address private owner;

    modifier initPrice {
        require(msg.value >= 2, "Not enough Eth available to call vote.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createElection() public payable initPrice returns (address) {
        elecAddr = address(new Election(msg.sender));
        electionList.push(elecAddr);

        return elecAddr;
    }

    function callVote() public returns (string memory) {
        // string memory result = Election(elecAddr).placeVote(msg.sender, );
        // return result;
    }
}