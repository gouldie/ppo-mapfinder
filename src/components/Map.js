import React, { Component } from 'react'
import Select from 'react-select'

const maps = [
    { value: 'Kanto', label: 'Kanto', clearableValue: false },
    { value: 'Johto', label: 'Johto', clearableValue: false }
]

const mapRegionToImage = {
    'Kanto': 'kanto',
    'Johto': 'johto'
}

export default class Map extends Component {
    constructor() {
        super()

        this.state = {
            selected: 'Kanto'
        }

        this.selectMap = this.selectMap.bind(this)
    }

    selectMap(e) {
        this.setState({
            selected: e.value
        })
    }

    render() {
        return (
            <div id="map-container" style={{ width: '450px' }}>
                <div style={{ height: '40px', width: '150px', margin: '0 auto' }}>
                    <Select
                        name="form-field-name"
                        value={this.state.selected}
                        options={maps}
                        onChange={this.selectMap}
                        clearable={false}
                    />
                </div>
                <img src={`../../public/imgs/${mapRegionToImage[this.state.selected]}.png`} alt=""
                     style={{ maxWidth: '100%', height: '327px', padding: '5px', border: '1px solid gray' }}/>
            </div>
        )
    }
}