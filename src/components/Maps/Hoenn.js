import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

export default class Hoenn extends Component {
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
        <div className="route-101" data-tip="Route 101" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '201px',
          left: '91px',
          width: '9px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-101') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-101') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-101') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-101') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-101'])
        }}>
        </div>

        <div className="route-102" data-tip="Route 102" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '187px',
          left: '67px',
          width: '20px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-102') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-102') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-102') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-102') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-102'])
        }}>
        </div>

        <div className='petalburg-city' data-tip="Petalburg City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '183px',
          left: '49px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('petalburg-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('petalburg-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('petalburg-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('petalburg-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['petalburg-city'])
        }}></div>

        <div className="route-104" data-tip="Route 104" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '178px',
          left: '37px',
          width: '9px',
          height: '26px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-104-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-104-1') >= 0
            || matchedAreas && matchedAreas.indexOf('route-104-2') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-104-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-104-1') >= 0
            || matchedAreas && matchedAreas.indexOf('route-104-2') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-104-1', 'route-104-2'])
        }}>
        </div>

        <div className="route-105" data-tip="Route 105" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '204px',
          left: '37px',
          width: '9px',
          height: '37px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-105') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-105') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-105') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-105') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-105'])
        }}>
        </div>

        <div className="route-106" data-tip="Route 106" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '239px',
          left: '37px',
          width: '35px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-106') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-106') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-106') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-106') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-106'])
        }}>
        </div>

        <div className='dewford-town' data-tip="Dewford Town" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '248px',
          left: '59px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('dewford-town') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('dewford-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('dewford-town') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('dewford-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['dewford-town'])
        }}></div>

        <div className='granite-cave' data-tip="Granite Cave" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '257px',
          left: '39px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('granite-cave-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('granite-cave-1') >= 0
            || matchedAreas && matchedAreas.indexOf('granite-cave-2') >= 0
            || matchedAreas && matchedAreas.indexOf('granite-cave-3') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-1') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-2') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-3') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-4') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-5') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-6') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-7') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-8') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-9') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-10') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-11') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-12') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-dungeon') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('granite-cave-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('granite-cave-1') >= 0
            || matchedAreas && matchedAreas.indexOf('granite-cave-2') >= 0
            || matchedAreas && matchedAreas.indexOf('granite-cave-3') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-1') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-2') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-3') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-4') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-5') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-6') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-7') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-8') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-9') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-10') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-11') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-cavern-12') >= 0
            || matchedAreas && matchedAreas.indexOf('ancient-dungeon') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea([
            'granite-cave-1',
            'granite-cave-2',
            'granite-cave-3',
            'ancient-cavern-1',
            'ancient-cavern-2',
            'ancient-cavern-3',
            'ancient-cavern-4',
            'ancient-cavern-5',
            'ancient-cavern-6',
            'ancient-cavern-7',
            'ancient-cavern-8',
            'ancient-cavern-9',
            'ancient-cavern-10',
            'ancient-cavern-11',
            'ancient-cavern-12',
            'ancient-dungeon'
          ])
        }}></div>

        <div className="route-107" data-tip="Route 107" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '253px',
          left: '77px',
          width: '70px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-107') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-107') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-107') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-107') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-107'])
        }}>
        </div>

        <div className="route-109" data-tip="Route 109" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '232px',
          left: '145px',
          width: '9px',
          height: '30px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-109') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-109') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-109') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-109') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-109'])
        }}>
        </div>

      </div>
    )
  }
}