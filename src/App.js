import React, { Component } from "react"
import { hot } from "react-hot-loader"

import "./App.css"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Body from "./components/Body"
import Footer from "./components/Footer"

class App extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <Menu />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default hot(module)(App)