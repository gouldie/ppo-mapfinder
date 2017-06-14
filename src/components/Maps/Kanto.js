import React, { Component } from 'react'

export default class Kanto extends Component {
    constructor() {
        super()

        this.state = {
            selected: null
        }
    }

    render() {
        const {
            selectedArea, setSelectedArea
        } = this.props

        return (
            <div>
                <div className="indigo-plateau" style={{
                    position: 'absolute',
                    top: '51px',
                    left: '38px',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%'
                }} onClick={(e) => {
                    if(e.stopPropagation) e.stopPropagation()
                    setSelectedArea('indigo-plateau')
                }}></div>
            </div>
        )
    }
}