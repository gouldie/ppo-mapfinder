import React, {Component} from 'react'

import Map from './Map.js'
import Info from './Info.js'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      mode: 0, // 0: by map, 1: by pokemon
      selectedMap: 'Kanto',
      selectedArea: [],
      selectedPokemon: null,
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.setSelectedMap = this.setSelectedMap.bind(this)
    this.setSelectedArea = this.setSelectedArea.bind(this)
    this.setSelectedPokemon = this.setSelectedPokemon.bind(this)
  }

  toggleMode(mode) {
    this.setState({mode})
  }

  setSelectedMap(map) {
    this.setState({ selectedMap: map.value })
  }

  setSelectedArea(area) {
    this.setState({ selectedArea: area })
  }

  setSelectedPokemon(poke) {
    this.setState({ selectedPokemon: poke })
  }

  render() {
    const {
      mode,
      selectedMap,
      selectedArea,
      selectedPokemon
    } = this.state

    const selectedButtonStyle = {
      backgroundColor: 'cornflowerblue',
      color: 'white',
      border: '1px solid cornflowerblue'
    }

    return (
      <div id="container">
        <h1>PPO Map Finder</h1>
        <div className="flex justify-center" style={{marginBottom: '20px'}}>
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
          <Map mode={mode} selectedMap={selectedMap} selectedArea={selectedArea}
               setSelectedMap={this.setSelectedMap} setSelectedArea={this.setSelectedArea} selectedPokemon={selectedPokemon} />
          <Info mode={mode} selectedMap={selectedMap} selectedArea={selectedArea} selectedPokemon={selectedPokemon}
                setSelectedPokemon={this.setSelectedPokemon} setSelectedMap={this.setSelectedMap} />
        </div>
      </div>
    )
  }
}