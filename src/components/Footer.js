import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Web3 from "web3"

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            selfAddr: "nil",
        }
        this.getselfAddr()
    }

    async getselfAddr() {
        const _selfAddr = await ethereum.request({method: 'eth_requestAccounts'})
        this.setState({
            selfAddr: _selfAddr,
        })
    }

    render() {
        return (
            <div id="app-footer">
                Your address is: {this.state.selfAddr}
            </div>
        )
    }
}

export default hot(module)(Footer)