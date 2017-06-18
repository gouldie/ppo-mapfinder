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

				<div className='diglett-cave' data-tip="Diglett Cave" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '94px',
          left: '85px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('diglett-cave') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('diglett-cave') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('diglett-cave') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('diglett-cave') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['diglett-cave'])
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

				<div className="route-2" data-tip="Route 2" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '137px',
          left: '89px',
          width: '9px',
          height: '18px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-2') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-2') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-2') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-2') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-2'])
        }}>
				</div>

				<div className="route-3" data-tip="Route 3" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '79px',
          left: '110px',
          width: '74px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-3'])
        }}>
				</div>
				<div className="route-3" data-tip="Route 3" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '56px',
          left: '175px',
          width: '9px',
          height: '23px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-3'])
        }}>
				</div>
				<div className="route-3" data-tip="Route 3" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '56px',
          left: '184px',
          width: '8px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-3') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-3'])
        }}>
				</div>

				<div className="route-4" data-tip="Route 4" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '55px',
          left: '213px',
          width: '84px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-4') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-4') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-4') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-4') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-4'])
        }}>
				</div>

				<div className="route-22" data-tip="Route 22" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '164px',
          left: '46px',
          width: '33px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-22') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-22') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-22') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-22') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-22'])
        }}>
				</div>

				<div className="route-23" data-tip="Route 23" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '94px',
          left: '46px',
          width: '9px',
          height: '72px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-23') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-23') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-23') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-23') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-23'])
        }}>
				</div>

				<div className='victory-road' data-tip="Victory Road" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '75px',
          left: '41px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('victory-road') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('victory-road') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('victory-road') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('victory-road') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['victory-road'])
        }}></div>

				<div className='cerulean-cave' data-tip="Cerulean Cave" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '34px',
          left: '286px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('cerulean-cave-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('cerulean-cave-1') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('cerulean-cave-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('cerulean-cave-1') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['cerulean-cave-1', 'cerulean-cave-2', 'cerulean-cave-3', 'cerulean-cave-4', 'cerulean-cave-5', 'cerulean-cave-6'])
        }}></div>

      </div>
    )
  }
}