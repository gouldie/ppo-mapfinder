import React, {Component} from 'react'
import kantoJSON from '../../public/json/kanto.json'
import { listAreaDetails, JSONtoPokemonList, matchedAreas } from '../utils/list'
import Select from 'react-select'

const regionJSON = [kantoJSON]
const mapRegionToJSON = {
  'Kanto': kantoJSON
}


export default class Info extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      selectedMap, selectedArea, selectedPokemon, setSelectedPokemon, mode
    } = this.props

    const details = mapRegionToJSON[selectedMap][selectedArea]

    return mode === 0 ?
      (
      <div id="info-container" style={{width: '450px'}}>
        <div style={{height: '40px'}}>

        </div>
        <div style={{height: '327px', border: '1px solid gray', padding: '5px', backgroundColor: 'lavender', overflowY: 'auto'}}>

          {
            details && listAreaDetails(details)
          }
        </div>
      </div>
    )
    :
    (
      <div id="info-container" style={{width: '450px'}}>
        <div style={{height: '40px', width: '150px', margin: '0 auto'}}>
          <Select
            name="form-field-name"
            value={selectedPokemon}
            options={JSONtoPokemonList(regionJSON)}
            onChange={setSelectedPokemon}
            clearable={false}
          />
        </div>
        <div style={{height: '327px', border: '1px solid gray', padding: '5px', backgroundColor: 'lavender', overflowY: 'auto'}}>


          {
            selectedPokemon ?
              <div>
                {
                  Object.keys(matchedAreas(selectedPokemon.value, regionJSON)).map((area, i) => {
                    return listAreaDetails(matchedAreas(selectedPokemon.value, regionJSON)[area], i)
                  })
                }
              </div>
              :
              <div>
                Please select a pokemon
              </div>
          }
        </div>
      </div>
    )
  }
}