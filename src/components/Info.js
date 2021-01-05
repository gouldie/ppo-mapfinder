import React, {Component} from 'react'
import kantoJSON from '../../public/json/kanto.json'
import johtoJSON from '../../public/json/johto.json'
import hoennJSON from '../../public/json/hoenn.json'
import sinnohJSON from '../../public/json/sinnoh.json'
import seviiJSON from '../../public/json/sevii.json'
import { listAreaDetails, JSONtoPokemonList, matchedAreas, pokemonToRegionsFound } from '../utils/list'
import Select from 'react-select'

const regionJSON = [kantoJSON, johtoJSON, hoennJSON, seviiJSON, sinnohJSON]
const JSONtoObj = Object.assign({}, kantoJSON, johtoJSON, hoennJSON, seviiJSON, sinnohJSON)

export default class Info extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      selectedMap, selectedArea, selectedPokemon, setSelectedMap, setSelectedPokemon, mode
    } = this.props

    const details = selectedArea && selectedArea.length > 0 ? selectedArea.map(area => {
    	return JSONtoObj[area]
    }) : undefined

    return mode === 0 ?
      (
      <div id="info-container" style={{width: '450px'}}>
        <div style={{height: '40px'}}>

        </div>
        <div style={{height: '327px', border: '1px solid gray', padding: '5px', backgroundColor: 'lavender', overflowY: 'auto'}}>

          {
            details && details.length > 0 ? details.map((detail, i) => {
            	return listAreaDetails(detail, i)
            })
              :
              <p style={{textAlign: 'center', marginTop: '20px', fontSize: '26px'}}>
                Select an area on the map : ^)
              </p>
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
            onChange={(e) => {
              setSelectedPokemon(e)

              const map = pokemonToRegionsFound(e.value, regionJSON)[0]

              setSelectedMap({
                value: map,
                label: map
              })
            }}
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
              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '26px' }}>
                Select a pokemon : ^)
              </p>
          }
        </div>
      </div>
    )
  }
}
