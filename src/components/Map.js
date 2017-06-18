import React, {Component} from 'react'
import Select from 'react-select'
import Kanto from './Maps/Kanto'
import Johto from './Maps/Johto'
import kantoJSON from '../../public/json/kanto.json'
import johtoJSON from '../../public/json/johto.json'
import { matchedAreas, pokemonToRegionsFound } from '../utils/list'

const regionJSON = [kantoJSON, johtoJSON]
const maps = [
  {value: 'Kanto', label: 'Kanto', clearableValue: false},
  {value: 'Johto', label: 'Johto', clearableValue: false}
]
const mapRegionToImage = {
  'Kanto': 'kanto',
  'Johto': 'johto'
}

export default class Map extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    const {
      selectedMap, setSelectedMap, setSelectedArea, selectedArea, selectedPokemon, mode
    } = this.props

    const matchedAreasStr = mode === 1 ? Object.keys(matchedAreas(selectedPokemon && selectedPokemon.value, regionJSON)) : undefined

    return mode === 0 ? (
        <div id="map-container" style={{width: '450px'}}>
          <div style={{height: '40px', width: '150px', margin: '0 auto'}}>
            <Select
              name="form-field-name"
              value={selectedMap}
              options={maps}
              onChange={setSelectedMap}
              clearable={false}
            />
          </div>
          <img src={`../../public/imgs/${mapRegionToImage[selectedMap]}.png`} alt=""
               style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

          <div onClick={() => setSelectedArea(null)}
               style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
            {
              selectedMap === 'Kanto' ?
                <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />
                  :
                <Johto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />
            }

          </div>
        </div>
      )
      :
      <div id="map-container" style={{width: '450px'}}>
        <div style={{height: '40px', width: '150px', margin: '0 auto'}}>
          <Select
            name="form-field-name"
            value={selectedMap}
            options={maps}
            onChange={setSelectedMap}
            clearable={false}
          />
        </div>
        <img src={`../../public/imgs/${mapRegionToImage[selectedMap]}.png`} alt=""
             style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

        <div onClick={() => setSelectedArea(null)}
             style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
          {
            selectedMap === 'Kanto' ?
              <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                     selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
              :
              <Johto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                     selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
          }

        </div>
      </div>
  }
}