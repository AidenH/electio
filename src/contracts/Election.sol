//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

contract Election {
    
    // Candidate list mapping with vote count
    mapping(address => uint256) public candidateList;
    
    address owner;
    address[] voterList;
    uint256 elecStart;
    uint256 registrationTime = 60;
    uint256 votingTime = 60;

    modifier regPeriod {
        require(block.timestamp < block.timestamp + registrationTime,
            "Registration period has ended.");
        _;
    }

    modifier votingPeriod {
        require(block.timestamp > elecStart + registrationTime, 
            "Registration period still active.");
        _;
    }

    modifier ownerOnly {
        require(msg.sender == owner, 
            "Only the Election owner may perform this action.");
        _;
    }

    // Adds caller to candidate list, marks election creation time
    constructor(address _callerAddr) {
        owner = _callerAddr;
        candidateList[_callerAddr] = 0;
        elecStart = block.timestamp;
    }

    // Add candidate to candidateList
    function addCandidate() public regPeriod returns (bool) {
        candidateList[msg.sender] = 0;

        return true;
    }

    // Places vote if between registration end and voting end.
    // Else, call tallyVote()
    function placeVote(address _callerAddr, address _candidate) public votingPeriod returns (string memory) {
        if (block.timestamp < (block.timestamp + registrationTime) + votingTime) {
            voterList.push(_callerAddr);
            candidateList[_candidate] += 1;

            return "Vote placed!";
        }
        else {
            tallyVote();

            return "Voting has ended.";
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