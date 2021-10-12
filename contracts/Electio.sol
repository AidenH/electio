//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

contract Election {
    mapping(address => uint256) private candidateList;
    address[] voterList;

    constructor(address _callerAddr) {
        candidateList[_callerAddr] = 0;
    }

    function placeVote(address _callerAddr) public returns (string memory) {
        voterList.push(_callerAddr);

        return "vote placed!";
    }
}

contract Caller {
    address[] electionList;
    address private elecAddr;

    constructor() payable {

    }

    function createElection() public returns (address) {
        elecAddr = address(new Election(msg.sender));
        electionList.push(elecAddr);

        return elecAddr;
    }

    function callVote() public returns (string memory) {
        string memory result = Election(elecAddr).placeVote(msg.sender);
        return result;
    }
}