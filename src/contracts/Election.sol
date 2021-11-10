//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Election {
    
    // Candidate list mapping with vote count
    mapping(address => uint256) private candidateTally;
    
    address owner;
    address[] public candidateList;
    address[] private voterList;
    uint256 elecStart;
    uint256 registrationTime = 60;
    uint256 votingTime = 60;

    // Check that registration period is still active
    modifier regPeriod {
        require(block.timestamp < block.timestamp + registrationTime,
            "Registration period has ended.");
        _;
    }

    // Check that voting period is still active
    modifier votingPeriod {
        // require(block.timestamp > elecStart + registrationTime, 
        //     "Registration period still active.");
        _;
    }

    modifier ownerOnly {
        require(msg.sender == owner, 
            "Only the Election owner may perform this action.");
        _;
    }

    // Price modifier with change return
    modifier price(uint _price) {
        require(msg.value > _price, "Not enough Ether supplied");
        _;
        if (msg.value > _price) {
            payable(msg.sender).transfer(msg.value - _price);
        }
    }

    // Adds caller to candidate list, marks election creation time
    constructor(address _callerAddr) {
        owner = _callerAddr;
        candidateTally[_callerAddr] = 0;
        elecStart = block.timestamp;
    }

    // Add candidate to candidateList
    function addCandidate() public payable regPeriod price(0.01999 ether) returns (address) {
        candidateTally[msg.sender] = 0;
        candidateList.push(msg.sender);

        return msg.sender;
    }

    // Places vote if between registration end and voting end.
    // Else, call tallyVote()
    function placeVote(address _candidate) public votingPeriod returns (bool) {
        if (block.timestamp < (block.timestamp + registrationTime) + votingTime) {
            voterList.push(msg.sender);
            candidateTally[_candidate] += 1;

            return true;
        }
        else {
            tallyVote();
            return false;
        }
    }

    function tallyVote() public view ownerOnly returns (bool) {
        return true;
    }

    // Return candidateList
    // function viewCandidates() public view returns (address[]) {
    //     address[] list;

    //     return candidateList;
    // }
}