import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        const {
            selectedMap, selectedArea
        } = this.props

        return (
            <div id="info-container" style={{ width: '450px' }}>
                <div style={{ height: '40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '26px' }}>{selectedMap}</p>
                </div>
                <div style={{ height: '327px', border: '1px solid gray', padding: '5px', backgroundColor: 'lavender' }}>
                    <p>{selectedArea || 'Select an area'}</p>
                </div>
            </div>
        )
    }
}