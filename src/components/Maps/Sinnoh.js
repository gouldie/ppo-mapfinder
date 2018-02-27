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
            : matchedAreas && matchedAreas.indexOf('route-204') >= 0
            || matchedAreas && matchedAreas.indexOf('ravaged-path') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-204') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-204') >= 0
            || matchedAreas && matchedAreas.indexOf('ravaged-path') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-204', 'ravaged-path'])
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

        <div className="route-205" data-tip="Route 205" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '198px',
          left: '108px',
          width: '23px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-205'])
        }}>
        </div>
        <div className="route-205" data-tip="Route 205" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '154px',
          left: '123px',
          width: '8px',
          height: '45px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-205'])
        }}>
        </div>
        <div className="route-205" data-tip="Route 205" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '147px',
          left: '115px',
          width: '23px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-205') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-205'])
        }}>
        </div>

        <div className='Fuego Ironworks' data-tip="Fuego Ironworks" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '138px',
          left: '87px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('fuego-ironworks') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('fuego-ironworks') >= 0
            || matchedAreas && matchedAreas.indexOf('fuego-ironworks-factory') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('fuego-ironworks') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('fuego-ironworks') >= 0
            || matchedAreas && matchedAreas.indexOf('fuego-ironworks-factory') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['fuego-ironworks', 'fuego-ironworks-factory'])
        }}></div>

        <div className='Iron Island' data-tip="Iron Island" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '123px',
          left: '53px',
          width: '17px',
          height: '17px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('iron-island') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('iron-island') >= 0
            || matchedAreas && matchedAreas.indexOf('iron-cave') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('iron-island') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('iron-island') >= 0
            || matchedAreas && matchedAreas.indexOf('iron-cave') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['iron-island', 'iron-cave'])
        }}></div>

        <div className='Eterna Forest' data-tip="Eterna Forest" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '131px',
          left: '118px',
          width: '17px',
          height: '17px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('eterna-forest') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('eterna-forest') >= 0
            || matchedAreas && matchedAreas.indexOf('old-chateau') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('eterna-forest') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('eterna-forest') >= 0
            || matchedAreas && matchedAreas.indexOf('old-chateau') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['eterna-forest', 'old-chateau'])
        }}></div>

        <div className="route-211" data-tip="Route 211" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '147px',
          left: '168px',
          width: '23px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-211') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-211') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-211') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-211') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-211'])
        }}>
        </div>
        <div className="route-211" data-tip="Route 211" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '147px',
          left: '196px',
          width: '17px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-211') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-211') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-211') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-211') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-211'])
        }}>
        </div>

        <div className="Mt. Coronet" data-tip="Mt. Coronet" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '95px',
          left: '190px',
          width: '8px',
          height: '97px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'pulse 2s infinite' : ''
          : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['mt-coronet-center', 'mt-coronet-tunnel', 'mt-coronet-south',
          'mt-coronet-north', 'mt-coronet-summit', 'mt-coronet-2f', 'mt-coronet-3f',
          'mt-coronet-4f', 'mt-coronet-b1f'])
        }}>
        </div>
        <div className="Mt. Coronet" data-tip="Mt. Coronet" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '186px',
          left: '175px',
          width: '8px',
          height: '44px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'pulse 2s infinite' : ''
          : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['mt-coronet-center', 'mt-coronet-tunnel', 'mt-coronet-south',
          'mt-coronet-north', 'mt-coronet-summit', 'mt-coronet-2f', 'mt-coronet-3f',
          'mt-coronet-4f', 'mt-coronet-b1f'])
        }}>
        </div>
        <div className="Mt. Coronet" data-tip="Mt. Coronet" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '185px',
          left: '182px',
          width: '8px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
            || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('mt-coronet-center') >= 0 ? 'pulse 2s infinite' : ''
          : matchedAreas && matchedAreas.indexOf('mt-coronet-center') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-tunnel') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-south') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-north') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-summit') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-2f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-3f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-4f') >= 0
          || matchedAreas && matchedAreas.indexOf('mt-coronet-b1f') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['mt-coronet-center', 'mt-coronet-tunnel', 'mt-coronet-south',
          'mt-coronet-north', 'mt-coronet-summit', 'mt-coronet-2f', 'mt-coronet-3f',
          'mt-coronet-4f', 'mt-coronet-b1f'])
        }}>
        </div>

        <div className="route-216" data-tip="Route 216" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '94px',
          left: '149px',
          width: '41px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-216') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-216') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-216') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-216') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-216'])
        }}>
        </div>

        <div className="route-217" data-tip="Route 217" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '34px',
          left: '149px',
          width: '24px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-217') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-217') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-217') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-217') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-217'])
        }}>
        </div>
        <div className="route-217" data-tip="Route 217" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '40px',
          left: '149px',
          width: '8px',
          height: '54px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-217') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-217') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-217') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-217') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-217'])
        }}>
        </div>

        <div className='snowpoint-city' data-tip="Snowpoint City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '14px',
          left: '175px',
          width: '27px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('snowpoint-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('snowpoint-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('snowpoint-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('snowpoint-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['snowpoint-city'])
        }}></div>

        <div className='celestic-town' data-tip="Celestic Town" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '142px',
          left: '214px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('celestic-town') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('celestic-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('celestic-town') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('celestic-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['celestic-town'])
        }}></div>

        <div className="route-210-b" data-tip="Route 210 B" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '147px',
          left: '234px',
          width: '28px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-210-b') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-210-b') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-210-b') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-210-b') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-210-b'])
        }}>
        </div>

        <div className="route-210-a" data-tip="Route 210 A" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '154px',
          left: '254px',
          width: '8px',
          height: '35px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-210-a') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-210-a') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-210-a') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-210-a') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-210-a'])
        }}>
        </div>

        <div className='solaceon-city' data-tip="Solaceon City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '191px',
          left: '246px',
          width: '46px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('solaceon-ruins') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('solaceon-ruins') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('solaceon-ruins') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('solaceon-ruins') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['solaceon-ruins'])
        }}></div>

        <div className="route-209" data-tip="Route 209" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '223px',
          left: '238px',
          width: '24px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-209') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-209') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-209') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-209') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-209'])
        }}>
        </div>

        <div className="route-206" data-tip="Route 206" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '166px',
          left: '149px',
          width: '8px',
          height: '68px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-206') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-206') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-206') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-206') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-206'])
        }}>
        </div>

        <div className="route-207" data-tip="Route 207" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '223px',
          left: '155px',
          width: '20px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-207') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-207') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-207') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-207') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-207'])
        }}>
        </div>

        <div className="route-208" data-tip="Route 208" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '223px',
          left: '182px',
          width: '25px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-208') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-208') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-208') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-208') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-208'])
        }}>
        </div>

        <div className="route-212-a" data-tip="Route 212 A" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '242px',
          left: '219px',
          width: '8px',
          height: '40px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-212-a') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-212-a') >= 0 
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-backyard') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-212-a') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-212-a') >= 0 
            || matchedAreas && matchedAreas.indexOf('pokemon-mansion-backyard') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-212-a', 'pokemon-mansion-backyard'])
        }}>
        </div>

        <div className="route-212-b" data-tip="Route 212 B" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '275px',
          left: '226px',
          width: '40px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-212-b') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-212-b') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-212-b') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-212-b') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-212-b'])
        }}>
        </div>

        <div className='Pastoria City' data-tip="Pastoria City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '265px',
          left: '267px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('pastoria-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pastoria-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('pastoria-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pastoria-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['pastoria-city'])
        }}></div>

        <div className="route-213" data-tip="Route 213" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '275px',
          left: '296px',
          width: '27px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-213') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-213') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-213') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-213') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-213'])
        }}>
        </div>

        <div className="route-214" data-tip="Route 214" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '196px',
          left: '315px',
          width: '8px',
          height: '81px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-214') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-214') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-214') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-214') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-214'])
        }}>
        </div>

        <div className="route-215" data-tip="Route 215" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '173px',
          left: '262px',
          width: '43px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-215') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-215') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-215') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-215') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-215'])
        }}>
        </div>

        <div className="route-222" data-tip="Route 222" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '249px',
          left: '323px',
          width: '42px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-222') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-222') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-222') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-222') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-222'])
        }}>
        </div>

        <div className='Sunnyshore City' data-tip="Sunnyshore City" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '239px',
          left: '366px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('sunnyshore-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('sunnyshore-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('sunnyshore-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('sunnyshore-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['sunnyshore-city'])
        }}></div>

        <div className="route-223" data-tip="Route 223" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '192px',
          left: '376px',
          width: '8px',
          height: '45px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-223') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-223') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-223') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-223') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-223'])
        }}>
        </div>

        <div className='sinnoh-victory-road' data-tip="Sinnoh Victory Road" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '173px',
          left: '372px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('sinnoh-victory-road') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('sinnoh-victory-road') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-victory-road-f') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-victory-road-b') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('sinnoh-victory-road') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('sinnoh-victory-road') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-victory-road-f') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-victory-road-b') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['sinnoh-victory-road', 'sinnoh-victory-road-f', 'sinnoh-victory-road-b'])
        }}></div>

        <div className='sinnoh-safari-zone' data-tip="Sinnoh Safari Zone" style={{
          cursor: mode === 0 ? 'pointer' : 'default',
          position: 'absolute',
          top: '249px',
          left: '264px',
          width: '17px',
          height: '17px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('sinnoh-safari-zone-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-1') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-2') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-3') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('sinnoh-safari-zone-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-1') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-2') >= 0
            || matchedAreas && matchedAreas.indexOf('sinnoh-safari-zone-3') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['sinnoh-safari-zone-1', 'sinnoh-safari-zone-2', 'sinnoh-safari-zone-3'])
        }}></div>

      </div>
    )
  }
}
