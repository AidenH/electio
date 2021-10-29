import React, { Component } from "react"
import { AppContainer, hot } from "react-hot-loader"
import Web3 from "web3"

const web3 = new Web3.providers.WebsocketProvider("ws:localhost:3000")

if (ethereum.isMetaMask === true) {
    console.log("MetaMask Present!")
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

    async addrUpdate() {
        const callerAddr = await ethereum.request({method: 'eth_requestAccounts'})

        this.setState({
            addr: callerAddr,
            addrVisible: true
        })
    }
}

export default hot(module)(Body)
