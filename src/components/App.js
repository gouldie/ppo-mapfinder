import React, { Component } from 'react'

import Map from './Map.js'
import Info from './Info.js'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            mode: 0, // 0: by map, 1: by pokemon
            selectedMap: 'Kanto',
            selectedArea: null,
            selectedPokemon: null
        }

        this.toggleMode = this.toggleMode.bind(this)
        this.setSelectedMap = this.setSelectedMap.bind(this)
        this.setSelectedArea = this.setSelectedArea.bind(this)
    }

    toggleMode(mode) {
        this.setState({ mode })
    }

    setSelectedMap(map) {
        this.setState({ selectedMap: map.value })
    }

    setSelectedArea(area) {
        this.setState({ selectedArea: area })
    }

    render() {
        const {
            mode,
            selectedMap,
            selectedArea
        } = this.state

        const selectedButtonStyle = {
            backgroundColor: 'cornflowerblue',
            color: 'white',
            border: '1px solid cornflowerblue'
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
                    <Map mode={mode} selected={selectedMap} setSelectedMap={this.setSelectedMap} setSelectedArea={this.setSelectedArea} />
                    <Info mode={mode} selectedMap={selectedMap} selectedArea={selectedArea}/>
                </div>
            </div>
        )
    }
}