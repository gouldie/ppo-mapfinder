import React, { Component } from 'react'

export default class Johto extends Component {
    constructor() {
        super()

        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    position: 'absolute',
                    top: '51px',
                    left: '38px',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%'
                }} onClick={() => console.log('asd')}></div>
            </div>

        )
    }
}