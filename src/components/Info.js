import React, { Component } from 'react'
import kantoJSON from '../../public/json/kanto.json'

const mapRegionToJSON = {
	'Kanto': kantoJSON
}

export default class Info extends Component {
	constructor() {
		super()

		this.listDetails = this.listDetails.bind(this)
		this.listPokemon = this.listPokemon.bind(this)
	}

	listDetails(details) {
		return (
			<div>
				{
					details['roam'] &&
					<div style={{ marginBottom: '10px' }}>
						<h4 style={{ color: 'darkslategray', fontStyle: 'italic' }}>Roaming</h4>
						{
							details['roam']['common'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Common: </span>
								<span>{this.listPokemon(details['roam']['common'])}</span>
							</div>

						}
						{
							details['roam']['uncommon'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Uncommon: </span>
								<span>{this.listPokemon(details['roam']['uncommon'])}</span>
							</div>

						}
						{
							details['roam']['rare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Rare: </span>
								<span>{this.listPokemon(details['roam']['rare'])}</span>
							</div>

						}
						{
							details['roam']['veryrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Very Rare: </span>
								<span>{this.listPokemon(details['roam']['veryrare'])}</span>
							</div>

						}
						{
							details['roam']['extremelyrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Extremely Rare: </span>
								<span>{this.listPokemon(details['roam']['extremelyrare'])}</span>
							</div>

						}
						{
							details['roam']['legendary'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Legendary: </span>
								<span>{this.listPokemon(details['roam']['legendary'])}</span>
							</div>

						}
					</div>
				}
				{
					details['fish'] &&
					<div style={{ marginBottom: '10px' }}>
						<h4 style={{ color: 'darkslategray', fontStyle: 'italic' }}>Fishing</h4>
						{
							details['fish']['common'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Common: </span>
								<span>{this.listPokemon(details['fish']['common'])}</span>
							</div>

						}
						{
							details['fish']['uncommon'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Uncommon: </span>
								<span>{this.listPokemon(details['fish']['uncommon'])}</span>
							</div>

						}
						{
							details['fish']['rare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Rare: </span>
								<span>{this.listPokemon(details['fish']['rare'])}</span>
							</div>

						}
						{
							details['fish']['veryrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Very Rare: </span>
								<span>{this.listPokemon(details['fish']['veryrare'])}</span>
							</div>

						}
						{
							details['fish']['extremelyrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Extremely Rare: </span>
								<span>{this.listPokemon(details['fish']['extremelyrare'])}</span>
							</div>

						}
						{
							details['fish']['legendary'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Legendary: </span>
								<span>{this.listPokemon(details['fish']['legendary'])}</span>
							</div>

						}
					</div>
				}
				{
					details['surf'] &&
					<div>
						<h4 style={{ color: 'darkslategray', fontStyle: 'italic' }}>Surfing</h4>
						{
							details['surf']['common'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Common: </span>
								<span>{this.listPokemon(details['surf']['common'])}</span>
							</div>

						}
						{
							details['surf']['uncommon'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Uncommon: </span>
								<span>{this.listPokemon(details['surf']['uncommon'])}</span>
							</div>

						}
						{
							details['surf']['rare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Rare: </span>
								<span>{this.listPokemon(details['surf']['rare'])}</span>
							</div>

						}
						{
							details['surf']['veryrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Very Rare: </span>
								<span>{this.listPokemon(details['surf']['veryrare'])}</span>
							</div>

						}
						{
							details['surf']['extremelyrare'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Extremely Rare: </span>
								<span>{this.listPokemon(details['surf']['extremelyrare'])}</span>
							</div>

						}
						{
							details['surf']['legendary'] &&
							<div>
								<span style={{ color: 'cornflowerblue' }}>Legendary: </span>
								<span>{this.listPokemon(details['surf']['legendary'])}</span>
							</div>

						}
					</div>
				}
			</div>
		)
	}

	listPokemon(arr) {
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

    render() {
        const {
            selectedMap, selectedArea
        } = this.props

		const details = mapRegionToJSON[selectedMap][selectedArea]

        return (
            <div id="info-container" style={{ width: '450px' }}>
                <div style={{ height: '40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '26px' }}>{details && details['name'] || selectedMap}</p>
                </div>
                <div style={{ height: '327px', border: '1px solid gray', padding: '5px', backgroundColor: 'lavender' }}>
					{
						details && this.listDetails(details)

					}
                </div>
            </div>
        )
    }
}