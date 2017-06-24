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

				<div className='mt-ember' data-tip="Mt. Ember" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '44px',
					left: '119px',
					width: '19px',
					height: '19px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('mt-ember') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('mt-ember') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('mt-ember') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('mt-ember') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['mt-ember'])
				}}></div>

				<div className='cape-brink' data-tip="Cape Brink" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '65px',
					left: '211px',
					width: '8px',
					height: '33px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('cape-brink') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('cape-brink') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('cape-brink') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('cape-brink') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['cape-brink'])
				}}></div>

				<div className='berry-forest' data-tip="Berry Forest" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '192px',
					left: '248px',
					width: '20px',
					height: '20px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('berry-forest') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('berry-forest') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('berry-forest') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('berry-forest') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['berry-forest'])
				}}></div>

				<div className='turtle-cove' data-tip="Turtle Cove" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '143px',
					left: '312px',
					width: '20px',
					height: '20px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('turtle-cove') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('turtle-cove') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('turtle-cove') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('turtle-cove') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['turtle-cove'])
				}}></div>

				<div className='bond-bridge' data-tip="Bond Bridge" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '199px',
					left: '269px',
					width: '109px',
					height: '8px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('bond-bridge') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('bond-bridge') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('bond-bridge') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('bond-bridge') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['bond-bridge'])
				}}></div>

				<div className='distant-isles' data-tip="Distant Isles" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '164px',
					left: '318px',
					width: '8px',
					height: '36px',
					backgroundColor: mode === 0 ? selectedArea.indexOf('distant-isles') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('distant-isles') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('distant-isles') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('distant-isles') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['distant-isles'])
				}}></div>

				<div className='three-island' data-tip="Three Island" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '217px',
					left: '362px',
					width: '28px',
					height: '28px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('three-island') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('three-island') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('three-island') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('three-island') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['three-island'])
				}}></div>

				<div className='two-island' data-tip="Two Island" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '98px',
					left: '202px',
					width: '28px',
					height: '28px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('two-island') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('two-island') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('two-island') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('two-island') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['two-island'])
				}}></div>

			</div>
		)
	}
}