import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Web3 from "web3"

const web3 = new Web3.providers.WebsocketProvider("ws:localhost:3000")

const addrDiv = document.getElementById("return-election-address")

class Body extends Component {
    constructor() {
        super()
        this.state = {
            addr: "AAAAAA",
            addrVisible: false
        }
    }

    render() {
        return (
            <div id="app-body">
                <div className="app-button" onClick={() => {
                    this.addrUpdate()
                }}>Body</div>

                {this.state.addrVisible &&
                    <div id="return-election-address">
                        <p>Your Election instance address is:</p>
                        {this.state.addrVisible && this.state.addr}
                    </div>
                }
            </div>
        )
    }

    addrUpdate() {
        this.setState({
            addr: "BBBBB",
            addrVisible: true
        })
    }
}

export default hot(module)(Body)
