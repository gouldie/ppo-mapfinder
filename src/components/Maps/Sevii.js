import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

export default class Kanto extends Component {
	constructor() {
		super()

		this.state = {
			selected: null,
			key: Date.now()
		}

		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.matchedAreas !== nextProps.matchedAreas) {
			this.setState({key: Date.now()})
		}
	}

	render() {
		const {
			selectedArea, setSelectedArea, matchedAreas, mode
		} = this.props

		return (
			<div key={this.state.key}>
				<ReactTooltip />

				<div className='treasure-beach' data-tip="Treasure Beach" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '211px',
					left: '81px',
					width: '18px',
					height: '18px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('treasure-beach') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('treasure-beach') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('treasure-beach') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('treasure-beach') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['treasure-beach'])
				}}></div>

				<div className='one-island' data-tip="One Island" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '165px',
					left: '78px',
					width: '26px',
					height: '25px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('one-island') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('one-island') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('one-island') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('one-island') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['one-island'])
				}}></div>

				<div className='huntys-path' data-tip="Hunty's Path" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '150px',
					left: '75px',
					width: '8px',
					height: '17px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('huntys-path') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('huntys-path') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('huntys-path') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('huntys-path') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['huntys-path'])
				}}></div>

				<div className='hellfire-cavern' data-tip="Hellfire Cavern" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '130px',
					left: '69px',
					width: '19px',
					height: '18px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('hellfire-cavern-1') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('hellfire-cavern-1') >= 0
						|| matchedAreas && matchedAreas.indexOf('hellfire-cavern-2') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('hellfire-cavern-1') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('hellfire-cavern-1') >= 0
						|| matchedAreas && matchedAreas.indexOf('hellfire-cavern-2') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['hellfire-cavern-1', 'hellfire-cavern-2'])
				}}></div>

				<div className='kindle-road' data-tip="Kindle Road" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '173px',
					left: '106px',
					width: '19px',
					height: '8px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('kindle-road') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('kindle-road') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('kindle-road') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('kindle-road') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['kindle-road'])
				}}></div>
				<div className='kindle-road' data-tip="Kindle Road" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '65px',
					left: '124px',
					width: '8px',
					height: '115px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('kindle-road') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('kindle-road') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('kindle-road') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('kindle-road') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['kindle-road'])
				}}></div>

			</div>
		)
	}
}