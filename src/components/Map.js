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

        }
    }

    render() {
        const {
            selected, setSelectedMap, setSelectedArea
        } = this.props

        return (
            <div id="map-container" style={{ width: '450px' }}>
                <div style={{ height: '40px', width: '150px', margin: '0 auto' }}>
                    <Select
                        name="form-field-name"
                        value={selected}
                        options={maps}
                        onChange={setSelectedMap}
                        clearable={false}
                    />
                </div>
                <img src={`../../public/imgs/${mapRegionToImage[selected]}.png`} alt=""
                     style={{ width: '450px', height: '327px', padding: '5px', border: '1px solid gray' }}/>

                <div style={{ position: 'absolute', width: '450px', height: '327px', top: '155px', padding: '5px' }}>
                    <div style={{
                        position: 'absolute',
                        top: '51px',
                        left: '38px',
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%'
                    }} onClick={() => setSelectedArea('Indigo Plateau')}></div>
                </div>
            </div>
        )
    }
}