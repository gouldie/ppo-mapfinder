import React, {Component} from 'react'

import Map from './Map.js'
import Info from './Info.js'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      mode: 0, // 0: by map, 1: by pokemon
      selectedMap: {
        value: 'Kanto',
        label: 'Kanto'
      },
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
    this.setState({ selectedMap: map })
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
        <h1>Pokemon Planet Pokefinder</h1>
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
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Something wrong? Let me know <a target="_blank" href="http://pokemon-planet.com/forums/index.php?topic=25445.0">here</a>.
        </p>

        <div className='footer' style={{
					position: 'absolute',
          bottom: '30px',
					left: '0',
          right: '0',
          minWidth: '930px'
				}}>
          <p style={{ marginBottom: '5px', textAlign: 'center', color: 'black' }}>idea and design by DracoCaeser, made with ♥ by Gouldie</p>
        </div>
      </div>
    )
  }
}
