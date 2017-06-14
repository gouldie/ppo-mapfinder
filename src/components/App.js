import React, { Component } from 'react'

import Map from './Map.js'
import Info from './Info.js'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            mode: 0 // 0: by map, 1: by pokemon
        }

        this.toggleMode = this.toggleMode.bind(this)
    }

    toggleMode(mode) {
        this.setState({ mode })
    }

    render() {
        const {
            mode
        } = this.state

        const selectedButtonStyle = {
            backgroundColor: 'cornflowerblue',
            color: 'white'
        }

        return (
            <div id="container">
                <h1>PPO Map Finder</h1>
                <div className="flex justify-center" style={{ marginBottom: '20px' }}>
                    <button className="btn btn-sm btn-secondary"
                            style={mode === 0 ? selectedButtonStyle : {}}
                            onClick={() => this.toggleMode(0)}>
                        By Map
                    </button>
                    <button className="btn btn-sm btn-secondary"
                            style={mode === 1 ? selectedButtonStyle : {}}
                            onClick={() => this.toggleMode(1)}>
                        By Pokemon
                    </button>
                </div>
                <div className="flex justify-center">
                    <Map />
                    <Info />
                </div>
            </div>
        )
    }
}