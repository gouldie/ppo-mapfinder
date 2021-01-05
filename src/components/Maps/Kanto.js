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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
					cursor: mode === 0 ? 'pointer' : 'default',
					position: 'absolute',
					top: '118px',
					left: '85px',
					width: '18px',
					height: '18px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('viridian-forest-1') >= 0 ? 'indianred' : ''
						: matchedAreas && matchedAreas.indexOf('viridian-forest-1') >= 0
						|| matchedAreas.indexOf('viridian-forest-2') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('viridian-forest-1') >= 0 ? 'pulse 2s infinite' : ''
						: matchedAreas && matchedAreas.indexOf('viridian-forest-1') >= 0
						|| matchedAreas.indexOf('viridian-forest-2') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['viridian-forest-1', 'viridian-forest-2'])
				}}></div>

        <div className='pewter-city' data-tip="Pewter City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '68px',
          left: '80px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('pewter-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pewter-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('pewter-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pewter-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['pewter-city'])
        }}></div>

				<div className='cerulean-city' data-tip="Cerulean City" style={{
					cursor: mode === 0 ? 'pointer' : 'default',
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
					cursor: mode === 0 ? 'pointer' : 'default',
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
					cursor: mode === 0 ? 'pointer' : 'default',
					position: 'absolute',
					top: '110px',
					left: '232px',
					width: '28px',
					height: '29px',
					borderRadius: '50%',
					backgroundColor: mode === 0 ? selectedArea.indexOf('celadon-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('celadon-city') >= 0 
            || matchedAreas && matchedAreas.indexOf('rocket-hideout') >= 0 ? 'indianred' : '' ,
					animation: mode === 0 ? selectedArea.indexOf('celadon-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('celadon-city') >= 0 
            || matchedAreas && matchedAreas.indexOf('rocket-hideout') >= 0 ? 'pulse 2s infinite' : ''
				}} onClick={(e) => {
					if (mode === 1) return
					if (e.stopPropagation) e.stopPropagation()
					setSelectedArea(['celadon-city', 'rocket-hideout'])
				}}></div>

				<div className='fuchsia-city' data-tip="Fuchsia City" style={{
					cursor: mode === 0 ? 'pointer' : 'default',
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
					cursor: mode === 0 ? 'pointer' : 'default',
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
					cursor: mode === 0 ? 'pointer' : 'default',
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

				<div className='diglett-cave' data-tip="Digletts Cave" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
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
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '34px',
          left: '286px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('cerulean-cave-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('cerulean-cave-1') >= 0
						|| matchedAreas.indexOf('cerulean-cave-2') >= 0
            || matchedAreas.indexOf('cerulean-cave-3') >= 0
            || matchedAreas.indexOf('cerulean-cave-4') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('cerulean-cave-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('cerulean-cave-1') >= 0
            || matchedAreas.indexOf('cerulean-cave-2') >= 0
            || matchedAreas.indexOf('cerulean-cave-3') >= 0
            || matchedAreas.indexOf('cerulean-cave-4') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['cerulean-cave-1', 'cerulean-cave-2', 'cerulean-cave-3', 'cerulean-cave-4'])
        }}></div>

				<div className="route-24" data-tip="Route 24" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '14px',
          left: '307px',
          width: '9px',
          height: '32px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-24') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-24') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-24') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-24') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-24'])
        }}>
				</div>

				<div className="route-25" data-tip="Route 25" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '13px',
          left: '316px',
          width: '47px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-25') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-25') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-25') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-25') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-25'])
        }}>
				</div>

				<div className="route-9" data-tip="Route 9" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '55px',
          left: '327px',
          width: '62px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-9') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-9') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-9') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-9') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-9'])
        }}>
				</div>

				<div className='rock-tunnel' data-tip="Rock Tunnel" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '50px',
          left: '390px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('rock-tunnel') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('rock-tunnel') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('rock-tunnel') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('rock-tunnel') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['rock-tunnel'])
        }}></div>

				<div className='power-plant' data-tip="Power Plant" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '74px',
          left: '390px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('power-plant') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('power-plant') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('power-plant') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('power-plant') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['power-plant'])
        }}></div>

				<div className='lavender-tower' data-tip="Lavender Tower" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '135px',
          left: '390px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('lavender-tower') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('lavender-tower') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('lavender-tower') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('lavender-tower') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['lavender-tower'])
        }}></div>

				<div className="route-8" data-tip="Route 8" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '119px',
          left: '327px',
          width: '57px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-8') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-8') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-8') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-8') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-8'])
        }}>
				</div>

				<div className="route-7" data-tip="Route 7" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '119px',
          left: '261px',
          width: '36px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-7') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-7') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-7') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-7') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-7'])
        }}>
				</div>

				<div className="route-16" data-tip="Route 16" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '119px',
          left: '163px',
          width: '68px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-16') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-16') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-16') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-16') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-16'])
        }}>
				</div>

				<div className="route-17" data-tip="Route 17" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '121px',
          left: '155px',
          width: '9px',
          height: '132px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-17') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-17') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-17') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-17') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-17'])
        }}>
				</div>

				<div className="route-18" data-tip="Route 18" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '252px',
          left: '157px',
          width: '96px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-18') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-18') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-18') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-18') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-18'])
        }}>
				</div>

				<div className="route-5" data-tip="Route 5" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '75px',
          left: '307px',
          width: '9px',
          height: '34px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-5') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-5') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-5') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-5') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-5'])
        }}>
				</div>

				<div className="route-6" data-tip="Route 6" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '139px',
          left: '307px',
          width: '9px',
          height: '37px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-6') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-6') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-6') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-6') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-6'])
        }}>
				</div>

				<div className='diglett-cave' data-tip="Digletts Cave" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '182px',
          left: '323px',
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

				<div className="route-6" data-tip="Route 6" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '139px',
          left: '307px',
          width: '9px',
          height: '37px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-6') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-6') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-6') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-6') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-6'])
        }}>
				</div>

				<div className="route-11" data-tip="Route 11" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '186px',
          left: '343px',
          width: '54px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-11') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-11') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-11') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-11') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-11'])
        }}>
				</div>

				<div className="route-12" data-tip="Route 12" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '155px',
          left: '395px',
          width: '9px',
          height: '75px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-12') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-12') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-12') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-12') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-12'])
        }}>
				</div>

				<div className="route-13" data-tip="Route 13" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '227px',
          left: '337px',
          width: '66px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-13') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-13') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-13') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-13') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-13'])
        }}>
				</div>

				<div className="route-14" data-tip="Route 14" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '229px',
          left: '330px',
          width: '9px',
          height: '30px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-14') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-14') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-14') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-14') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-14'])
        }}>
				</div>

				<div className="route-15" data-tip="Route 15" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '252px',
          left: '284px',
          width: '48px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-15') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-15') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-15') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-15') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-15'])
        }}>
				</div>

				<div className='kanto-safari' data-tip="Kanto Safari Zone" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '227px',
          left: '270px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('kanto-safari') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('kanto-safari') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('kanto-safari') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('kanto-safari') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['kanto-safari'])
        }}></div>

				<div className="route-19" data-tip="Route 19" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '272px',
          left: '265px',
          width: '9px',
          height: '30px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-19') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-19') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-19') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-19') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-19'])
        }}>
				</div>

				<div className="route-20" data-tip="Route 20" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '294px',
          left: '192px',
          width: '74px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-20') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-20') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-20') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-20') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-20'])
        }}>
				</div>
				<div className="route-20" data-tip="Route 20" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '294px',
          left: '110px',
          width: '61px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-20') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-20') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-20') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-20') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-20'])
        }}>
				</div>

				<div className="route-21" data-tip="Route 21" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '248px',
          left: '89px',
          width: '9px',
          height: '36px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-21') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-21') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-21') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-21') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-21'])
        }}>
				</div>

				<div className='pokemon-mansion' data-tip="Pokemon Mansion" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '273px',
          left: '67px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('pokemon-mansion-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pokemon-mansion-1') >= 0
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-2') >= 0
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-3') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('pokemon-mansion-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pokemon-mansion-1') >= 0
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-2')
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-3') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['pokemon-mansion-1', 'pokemon-mansion-2', 'pokemon-mansion-3'])
        }}></div>

				<div className='seafoam-islands' data-tip="Seafoam Islands" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '289px',
          left: '172px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('seafoam-islands-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('seafoam-islands-1') >= 0
						|| matchedAreas && matchedAreas.indexOf('seafoam-islands-2') >= 0
						|| matchedAreas && matchedAreas.indexOf('seafoam-islands-4') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('seafoam-islands-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('seafoam-islands-1') >= 0
            || matchedAreas && matchedAreas.indexOf('seafoam-islands-2') >= 0
            || matchedAreas && matchedAreas.indexOf('seafoam-islands-4') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['seafoam-islands-1', 'seafoam-islands-2', 'seafoam-islands-4'])
        }}></div>

      </div>
    )
  }
}