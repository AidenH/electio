import React, { Component } from "react"
import { AppContainer, hot } from "react-hot-loader"
import Web3 from "web3"
import ElectionCallerAbi from '../../build/contracts/ElectionCaller.json'

// Init web3 and deployed ElectionCaller contract
const web3 = new Web3('ws://127.0.0.1:8545')
const contractAddr = web3.utils.toChecksumAddress(
    "0x9A84ae7f5022da413B363b7888CE0C8E10eFaF8b")
const ElectionCaller = new web3.eth.Contract(ElectionCallerAbi.abi, contractAddr)

// Check for MetaMask
if (ethereum.isMetaMask === true) {
    console.log("MetaMask is present!")
}

class Body extends Component {
    constructor() {
        super()
        this.state = {
            senderAddr: "empty",
            senderAddrVisible: false,
            deployedAddr: "empty",
            deployedAddrVisible: false,
        }
    }

    render() {
        return (
            <div id="app-body">
                <div id="button-box">
                    <div className="app-button" onClick={() => {
                        this.addrUpdate()
                    }}>Get Address</div>

                    <div className="app-button" onClick={() => {
                        this.deployElectionInst()
                    }}>Deploy</div>
                </div>

                {this.state.senderAddrVisible &&
                    <div id="return-election-address">
                        <p>Your address is:</p>
                        {this.state.senderAddrVisible && this.state.senderAddr}
                    </div>
                }

                {/* Deployed address drop-down div will go here */}
            </div>
        )
    }

    // [Temp.] Get sender address
    async addrUpdate() {
        const _callerAddr = await ethereum.request({method: 'eth_requestAccounts'})

        this.setState({
            senderAddr: _callerAddr,
            senderAddrVisible: true,
        })
    }

    // Deploy Election instance
    async deployElectionInst() {
        let _callerAddr = await ethereum.request({method: 'eth_requestAccounts'})
        await ElectionCaller.methods.createElection().send({from: String(_callerAddr).toLowerCase(), gas: 580000})

        let _electionInst = await ElectionCaller.methods.createElection().call()
        console.log(_electionInst)

        this.setState({
            deployedAddr: _electionInst,
            deployedAddrVisible:true,
        })
    }
}

export default hot(module)(Body)
