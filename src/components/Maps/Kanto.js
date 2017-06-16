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
                <div className='viridian-city' style={{
                	cursor: 'pointer',
                	position: 'absolute',
                    top: '155px',
                    left: '80px',
                    width: '28px',
                    height: '29px',
                    borderRadius: '50%',
					backgroundColor: selectedArea === 'viridian-city' ? 'indianred' : '',
					animation: selectedArea === 'viridian-city' ? 'pulse 3s infinite' : ''
                }} onClick={(e) => {
                    if(e.stopPropagation) e.stopPropagation()
                    setSelectedArea('viridian-city')
                }}></div>

				<div className="route-1" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '184px',
					left: '89px',
					width: '9px',
					height: '34px',
					backgroundColor: selectedArea === 'route-1' ? 'indianred' : '',
					animation: selectedArea === 'route-1' ? 'pulse 3s infinite' : ''
				}} onClick={(e) => {
					if(e.stopPropagation) e.stopPropagation()
					setSelectedArea('route-1')
				}}>
				</div>
            </div>
        )
    }
}