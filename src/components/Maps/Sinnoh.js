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
          height: '9px',
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

      </div>
    )
  }
}
