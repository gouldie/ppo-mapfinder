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
          backgroundColor: mode === 0 ? selectedArea === 'pallet-town' ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pallet-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea === 'pallet-town' ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pallet-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea('pallet-town')
        }}></div>

        <div className="route-1" data-tip="Route 1" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '184px',
          left: '89px',
          width: '9px',
          height: '34px',
          backgroundColor: mode === 0 ? selectedArea === 'route-1' ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-1') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea === 'route-1' ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-1') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea('route-1')
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
          backgroundColor: mode === 0 ? selectedArea === 'viridian-city' ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('viridian-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea === 'viridian-city' ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('viridian-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea('viridian-city')
        }}></div>

      </div>
    )
  }
}