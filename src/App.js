import React, { Component } from "react"
import { hot } from "react-hot-loader"

import "./App.css"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

class App extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default hot(module)(App)