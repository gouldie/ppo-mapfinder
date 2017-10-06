import React, {Component} from 'react'
import Select from 'react-select'
import Kanto from './Maps/Kanto'
import Johto from './Maps/Johto'
import Hoenn from './Maps/Hoenn'
import Sevii from './Maps/Sevii'
import kantoJSON from '../../public/json/kanto.json'
import johtoJSON from '../../public/json/johto.json'
import hoennJSON from '../../public/json/hoenn.json'
import seviiJSON from '../../public/json/sevii.json'
import { matchedAreas } from '../utils/list'

const regionJSON = [kantoJSON, johtoJSON, hoennJSON, seviiJSON]
const maps = [
  {value: 'Kanto', label: 'Kanto', clearableValue: false},
  {value: 'Johto', label: 'Johto', clearableValue: false},
  {value: 'Hoenn', label: 'Hoenn', clearableValue: false},
  {value: 'Sevii Islands', label: 'Sevii Islands', clearableValue: false}
]
const mapRegionToImage = {
  'Kanto': 'kanto',
  'Johto': 'johto',
  'Hoenn': 'hoenn',
  'Sevii Islands': 'sevii'
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

    console.log('test', window.location.hostname)

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
          <img src={`../../${window.location.hostname === "localhost" ? "" : "ppo-townmap/"}public/imgs/${mapRegionToImage[selectedMap]}.png`} alt=""
               style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

          <div onClick={() => setSelectedArea([])}
               style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
            {
              selectedMap === 'Kanto' ?
                <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />
                  : selectedMap === 'Johto' ?
                  <Johto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />
									: selectedMap === 'Hoenn' ?
										<Hoenn selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />
										:
										<Sevii selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode} />

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
        <img src={`../../${window.location.hostname === "localhost" ? "" : "ppo-townmap/"}public/imgs/${mapRegionToImage[selectedMap]}.png`} alt=""
             style={{width: '450px', height: '327px', padding: '5px', border: '1px solid gray'}}/>

        <div onClick={() => setSelectedArea([])}
             style={{position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px'}}>
          {
            selectedMap === 'Kanto' ?
              <Kanto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                     selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
              : selectedMap === 'Johto' ?
                <Johto selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                     selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
                : selectedMap === 'Hoenn' ?
									<Hoenn selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
                       selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
									:
									<Sevii selectedArea={selectedArea} setSelectedArea={setSelectedArea} mode={mode}
												 selectedPokemon={selectedPokemon} matchedAreas={matchedAreasStr} />
          }

        </div>
      </div>
  }
}