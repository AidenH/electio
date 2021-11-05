import React, { Component } from "react"
import { AppContainer, hot } from "react-hot-loader"

import ghIcon from './img/gh-icon-light.png'

class Menu extends Component {
    constructor() {
        super()
        this.dropdownRef = React.createRef()
    }

    menuDrop() {
        const dropDown = this.dropdownRef.current
        dropDown.classList.toggle('open')
    }

    render() {
        return (
            <div id="app-menu">
                <h2>
                    <div className="menu-items" onClick={() => this.menuDrop()}>
                        About
                        <div ref={this.dropdownRef} className="menu-drop-down">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.    
                        </div>
                    </div>
                    <div className="menu-items">
                        <a href="http://github.com/aidenh/electio">
                            <img id="gh-icon" src={ghIcon}></img>
                        </a>
                    </div>
                </h2>
            </div>
        )
    }
}

export default hot(module)(Menu)