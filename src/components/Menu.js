import React, { Component } from "react"
import { AppContainer, hot } from "react-hot-loader"

class Menu extends Component {
    render() {
        return (
            <div id="app-menu">
                <h2>
                    <div className="menu-items">About</div>
                    <div className="menu-items">🗳️</div>
                </h2>
            </div>
        )
    }
}

export default hot(module)(Menu)