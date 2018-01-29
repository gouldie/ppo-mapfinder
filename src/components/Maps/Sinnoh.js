import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

export default class Johto extends Component {
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
        <div className='twinleaf-town' data-tip="Twinleaf Town" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '291px',
          left: '61px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('twinleaf-town') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('twinleaf-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('twinleaf-town') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('twinleaf-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['twinleaf-town'])
        }}></div>

        <div className="route-201" data-tip="Route 201" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '280px',
          left: '59px',
          width: '23px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-201') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-201') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-201') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-201') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-201'])
        }}>
        </div>

        <div className='Lake Verity' data-tip="Lake Verity" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '270px',
          left: '30px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('verity-lake') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('verity-lake') >= 0
            || matchedAreas && matchedAreas.indexOf('verity-cave') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('verity-lake') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('verity-lake') >= 0
            || matchedAreas && matchedAreas.indexOf('verity-cave') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['verity-lake', 'verity-cave'])
        }}></div>

        <div className="route-202" data-tip="Route 202" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '263px',
          left: '88px',
          width: '8px',
          height: '11px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-202') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-202') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-202') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-202') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-202'])
        }}>
        </div>

        <div className="route-219" data-tip="Route 219" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '294px',
          left: '88px',
          width: '8px',
          height: '11px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-219') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-219') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-219') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-219') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-219'])
        }}>
        </div>

        <div className="route-220" data-tip="Route 220" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '303px',
          left: '88px',
          width: '20px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-220') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-220') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-220') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-220') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-220'])
        }}>
        </div>

        <div className="route-221" data-tip="Route 221" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '303px',
          left: '108px',
          width: '35px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-221') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-221') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-221') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-221') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-221'])
        }}>
        </div>

        <div className="route-218" data-tip="Route 218" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '244px',
          left: '67px',
          width: '11px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-218') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-218') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-218') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-218') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-218'])
        }}>
        </div>

        <div className='Canalave City' data-tip="Canalave City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '204px',
          left: '43px',
          width: '27px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('canalave-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('canalave-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('canalave-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('canalave-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['canalave-city'])
        }}></div>

        <div className="route-204" data-tip="Route 204" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '225px',
          left: '89px',
          width: '8px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-204') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-204') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-204') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-204') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-204'])
        }}>
        </div>

        <div className="route-203" data-tip="Route 203" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '244px',
          left: '108px',
          width: '26px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-203') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-203') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-203') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-203') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-203'])
        }}>
        </div>

        <div className='Oreburgh City' data-tip="Oreburgh City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '234px',
          left: '135px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('oreburgh-gate') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('oreburgh-gate') >= 0
            || matchedAreas && matchedAreas.indexOf('deep-oreburgh-mine') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('oreburgh-gate') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('oreburgh-gate') >= 0
            || matchedAreas && matchedAreas.indexOf('deep-oreburgh-mine') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['oreburgh-gate', 'deep-oreburgh-mine'])
        }}></div>

      </div>
    )
  }
}
