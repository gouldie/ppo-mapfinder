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
      this.setState({ key: Date.now() })
    }
  }

  render() {
    const {
      selectedArea, setSelectedArea, matchedAreas, mode
    } = this.props

    return (
      <div key={this.state.key}>
        <ReactTooltip />
        <div className='pallet-town' data-tip="Pallet Town" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '218px',
          left: '80px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('pallet-town') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pallet-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('pallet-town') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pallet-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['pallet-town'])
        }}></div>

        <div className="route-1" data-tip="Route 1" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '184px',
          left: '89px',
          width: '9px',
          height: '34px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-1') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-1') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-1'])
        }}>
        </div>

        <div className='viridian-city' data-tip="Viridian City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '155px',
          left: '80px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('viridian-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('viridian-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('viridian-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('viridian-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['viridian-city'])
        }}></div>

				<div className='viridian-forest' data-tip="Viridian Forest" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '118px',
					left: '85px',
					width: '18px',
					height: '18px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('viridian-forest-1') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('viridian-forest-1') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('viridian-forest-1') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('viridian-forest-1') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['viridian-forest-1', 'viridian-forest-2'])
				}}></div>

				<div className='cerulean-city' data-tip="Cerulean City" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '45px',
					left: '298px',
					width: '28px',
					height: '29px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('cerulean-city') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('cerulean-city') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('cerulean-city') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('cerulean-city') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['cerulean-city'])
				}}></div>

				<div className='vermillion-city' data-tip="Vermillion City" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '177px',
					left: '298px',
					width: '28px',
					height: '29px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('vermillion-city') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('vermillion-city') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('vermillion-city') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('vermillion-city') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['vermillion-city'])
				}}></div>

				<div className='celadon-city' data-tip="Celadon City" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '110px',
					left: '232px',
					width: '28px',
					height: '29px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('celadon-city') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('celadon-city') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('celadon-city') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('celadon-city') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['celadon-city'])
				}}></div>

				<div className='fuchsia-city' data-tip="Fuchsia City" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '243px',
					left: '255px',
					width: '28px',
					height: '29px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('fuchsia-city') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('fuchsia-city') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('fuchsia-city') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('fuchsia-city') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['fuchsia-city'])
				}}></div>

				<div className='cinnabar-island' data-tip="Cinnabar Island" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '285px',
					left: '80px',
					width: '28px',
					height: '28px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('cinnabar-island') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('cinnabar-island') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('cinnabar-island') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('cinnabar-island') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['cinnabar-island'])
				}}></div>

				<div className='mt-moon' data-tip="Mt. Moon" style={{
					cursor: 'pointer',
					position: 'absolute',
					top: '50px',
					left: '193px',
					width: '18px',
					height: '18px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('mt-moon') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('mt-moon') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('mt-moon') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('mt-moon') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['mt-moon', 'mt-moon-exit'])
				}}></div>

      </div>
    )
  }
}