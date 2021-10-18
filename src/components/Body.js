import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Web3 from "web3"

const web3 = new Web3.providers.WebsocketProvider("ws:localhost:3000")

class Body extends Component {
    render() {
        return (
            <div id="app-body">
                <div className="app-button">Body</div>
            </div>
        )
    }
}

export default hot(module)(Body)
