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

    toggleMode() {
        this.setState({ mode: this.state.mode === 0 ? 1 : 0 })
    }

    render() {
        const {
            mode
        } = this.state

        return (
            <div id="container">
                <h1>PPO Map Finder</h1>
                <div className="flex justify-center" style={{ marginBottom: '20px' }}>
                    <button className="btn btn-sm btn-secondary"
                            style={{ marginRight: '10px' }}
                            onClick={this.toggleMode}>
                        By Map
                    </button>
                    <button className="btn btn-sm btn-secondary active"
                            onClick={this.toggleMode}>
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