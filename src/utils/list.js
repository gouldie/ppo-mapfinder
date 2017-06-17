import React from 'react'

export const listAreaDetails = (details, i) => {
  return (
    <div key={i}>
      <p style={{
        fontSize: '26px',
        textAlign: 'center',
        marginBottom: '0px'
      }}>{details && details['name']}</p>
      {
        details['roam'] &&
        <div style={{marginBottom: '10px'}}>
          <h4 style={{color: 'darkslategray', fontStyle: 'italic'}}>Roaming</h4>
          {
            details['roam']['common'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Common: </span>
              <span>{pokemonArrToString(details['roam']['common'])}</span>
            </div>

          }
          {
            details['roam']['uncommon'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Uncommon: </span>
              <span>{pokemonArrToString(details['roam']['uncommon'])}</span>
            </div>

          }
          {
            details['roam']['rare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Rare: </span>
              <span>{pokemonArrToString(details['roam']['rare'])}</span>
            </div>

          }
          {
            details['roam']['veryrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Very Rare: </span>
              <span>{pokemonArrToString(details['roam']['veryrare'])}</span>
            </div>

          }
          {
            details['roam']['extremelyrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
              <span>{pokemonArrToString(details['roam']['extremelyrare'])}</span>
            </div>

          }
          {
            details['roam']['legendary'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Legendary: </span>
              <span>{pokemonArrToString(details['roam']['legendary'])}</span>
            </div>

          }
        </div>
      }
      {
        details['fish'] &&
        <div style={{marginBottom: '10px'}}>
          <h4 style={{color: 'darkslategray', fontStyle: 'italic'}}>Fishing</h4>
          {
            details['fish']['common'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Common: </span>
              <span>{pokemonArrToString(details['fish']['common'])}</span>
            </div>

          }
          {
            details['fish']['uncommon'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Uncommon: </span>
              <span>{pokemonArrToString(details['fish']['uncommon'])}</span>
            </div>

          }
          {
            details['fish']['rare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Rare: </span>
              <span>{pokemonArrToString(details['fish']['rare'])}</span>
            </div>

          }
          {
            details['fish']['veryrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Very Rare: </span>
              <span>{pokemonArrToString(details['fish']['veryrare'])}</span>
            </div>

          }
          {
            details['fish']['extremelyrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
              <span>{pokemonArrToString(details['fish']['extremelyrare'])}</span>
            </div>

          }
          {
            details['fish']['legendary'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Legendary: </span>
              <span>{pokemonArrToString(details['fish']['legendary'])}</span>
            </div>

          }
        </div>
      }
      {
        details['surf'] &&
        <div>
          <h4 style={{color: 'darkslategray', fontStyle: 'italic'}}>Surfing</h4>
          {
            details['surf']['common'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Common: </span>
              <span>{pokemonArrToString(details['surf']['common'])}</span>
            </div>

          }
          {
            details['surf']['uncommon'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Uncommon: </span>
              <span>{pokemonArrToString(details['surf']['uncommon'])}</span>
            </div>

          }
          {
            details['surf']['rare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Rare: </span>
              <span>{pokemonArrToString(details['surf']['rare'])}</span>
            </div>

          }
          {
            details['surf']['veryrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Very Rare: </span>
              <span>{pokemonArrToString(details['surf']['veryrare'])}</span>
            </div>

          }
          {
            details['surf']['extremelyrare'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
              <span>{pokemonArrToString(details['surf']['extremelyrare'])}</span>
            </div>

          }
          {
            details['surf']['legendary'] &&
            <div>
              <span style={{color: 'cornflowerblue'}}>Legendary: </span>
              <span>{pokemonArrToString(details['surf']['legendary'])}</span>
            </div>

          }
        </div>
      }
    </div>
  )
}

export const pokemonArrToString = (arr) => {
  let str = ''

  arr.map((e, i) => {
    let toAdd = ''

    if (i >= arr.length - 1) {
      toAdd = e
    } else {
      toAdd = e + ', '
    }

    str += toAdd
  })

  return str
}

export const JSONtoPokemonList = (JSON) => {
  let pokemonList = []
  let formattedPokemonList = []

  JSON.map(region => {
    Object.keys(region).map(area => {
      Object.keys(region[area]).map(type => {
        if (type === 'roam' || type === 'fish' || type === 'surf') {
          Object.keys(region[area][type]).map(rarity => {
            region[area][type][rarity].map(pokemon => {
              if (pokemonList.indexOf(pokemon) < 0) {
                pokemonList.push(pokemon)
              }
            })
          })
        }
      })
    })
  })

  pokemonList.sort().map(pokemon => {
    formattedPokemonList.push({value: pokemon, label: pokemon, clearableValue: false})
  })

  return formattedPokemonList
}

export const matchedAreas = (pokemon, regionJSON) => {
  // example output
  const test = {
    "Kanto": {
      "route-1": {
        "roam": {
          "common": ['pikachu', 'pidgey']
        }
      }
    }
  }

  let matchJSON = {}
  let matchFound = false

  regionJSON.map(region => {
    Object.keys(region).map((area, i) => {
      Object.keys(region[area]).map(type => {
        if (type === 'roam' || type === 'fish' || type === 'surf') {
          Object.keys(region[area][type]).map(rarity => {
            if (region[area][type][rarity].indexOf(pokemon) >= 0) {
              matchFound = true
            }
          })
        }
      })

      // end of area
      if (matchFound) {
        matchJSON[area] = region[area]
      }

      matchFound = false
    })
  })

  return matchJSON
}