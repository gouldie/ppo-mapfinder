import React, {Component} from 'react'
import Select from 'react-select'
import Kanto from './Maps/Kanto'
import kantoJSON from '../../public/json/kanto.json'
import { matchedAreas } from '../utils/list'

const regionJSON = [kantoJSON]
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
      selected, setSelectedMap, setSelectedArea, selectedArea, selectedPokemon, mode
    } = this.props

    const matchedAreasStr = mode === 1 ? Object.keys(matchedAreas(selectedPokemon && selectedPokemon.value, regionJSON)) : undefined

    return mode === 0 ? (
        <div id="map-container" style={{width: '450px'}}>
          <div style={{height: '40px', width: '150px', margin: '0 auto'}}>
            <Select
              name="form-field-name"
              value={selected}
              options={maps}
              onChange={setSelectedMap}
              clearable={false}
            />
          </div>
          <img src={`../../public/imgs/${mapRegionToImage[selected]}.png`} alt=""
               style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

          <div onClick={() => setSelectedArea(null)}
               style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
            <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
          </div>
        </div>
      )
      :
      <div id="map-container" style={{width: '450px'}}>
        <div style={{height: '40px', width: '150px', margin: '0 auto'}}>
          <Select
            name="form-field-name"
            value={selected}
            options={maps}
            onChange={setSelectedMap}
            clearable={false}
          />
        </div>
        <img src={`../../public/imgs/${mapRegionToImage[selected]}.png`} alt=""
             style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

        <div onClick={() => setSelectedArea(null)}
             style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
          <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                 selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
        </div>
      </div>
  }
}