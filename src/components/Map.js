import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div id="map-container" style={{ width: '450px', height: '327px', backgroundColor: 'blue' }}>
                <img src="../../public/imgs/kanto.png" alt="" style={{ maxWidth: '100%' }}/>
            </div>
        )
    }
}