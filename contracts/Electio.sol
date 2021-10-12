//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

contract Election {
    mapping(address => uint256) private candidateList;
    address[] voterList;
    uint256 elecStart;
    uint256 registrationTime = 60;
    uint256 votingTime = 60;

    modifier votingPeriod {
        require(block.timestamp > elecStart + registrationTime, 
            "Registration period still active.");
        _;
    }

    constructor(address _callerAddr) {
        candidateList[_callerAddr] = 0;
        elecStart = block.timestamp;
    }

    function placeVote(address _callerAddr, address _candidate) public votingPeriod returns (string memory) {
        if (block.timestamp < (block.timestamp + registrationTime) + votingTime) {
        voterList.push(_callerAddr);
            candidateList[_candidate] += 1;

        return "vote placed!";
    }
        else {

    }

    function callVote() public returns (string memory) {
        string memory result = Election(elecAddr).placeVote(msg.sender);
        return result;
    }
}