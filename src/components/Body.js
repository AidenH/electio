import React, { Component } from "react"
import { AppContainer, hot } from "react-hot-loader"
import Web3 from "web3"
import ElectionCallerAbi from '../../build/contracts/ElectionCaller.json'

// Instantiate web3 and deployed ElectionCaller contract
const web3 = new Web3('ws://127.0.0.1:8545')
const ElectionCaller = new web3.eth.Contract(ElectionCallerAbi.abi, "0xa45fa685e8017302a963dfc7aacd63bc96c48df0")

if (ethereum.isMetaMask === true) {
    console.log("MetaMask is present!")
}

class Body extends Component {
    constructor() {
        super()
        this.state = {
            addr: "empty",
            addrVisible: false
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

                {this.state.addrVisible &&
                    <div id="return-election-address">
                        <p>Your Election instance caller address is:</p>
                        {this.state.addrVisible && this.state.addr}
                    </div>
                }
            </div>
        )
    }

    // [Temp.] Get sender address
    async addrUpdate() {
        const callerAddr = await ethereum.request({method: 'eth_requestAccounts'})

        this.setState({
            addr: callerAddr,
            addrVisible: true
        })
    }
}

export default hot(module)(Body)
