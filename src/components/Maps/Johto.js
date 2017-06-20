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
          <div className='new-bark-town' data-tip="New Bark Town" style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '214px',
            left: '399px',
            width: '28px',
            height: '29px',
            borderRadius: '50%',
            backgroundColor: mode === 0 ? selectedArea.indexOf('new-bark-town') >= 0 ? 'indianred' : ''
              : matchedAreas && matchedAreas.indexOf('new-bark-town') >= 0 ? 'indianred' : '' ,
            animation: mode === 0 ? selectedArea.indexOf('new-bark-town') >= 0 ? 'pulse 2s infinite' : ''
              : matchedAreas && matchedAreas.indexOf('new-bark-town') >= 0 ? 'pulse 2s infinite' : ''
          }} onClick={(e) => {
            if (mode === 1) return
            if (e.stopPropagation) e.stopPropagation()
            setSelectedArea(['new-bark-town'])
          }}></div>

        <div className="route-27" data-tip="Route 27" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '224px',
          left: '427px',
          width: '15px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-27') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-27') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-27') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-27') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-27'])
        }}>
        </div>

        <div className="route-26" data-tip="Route 26" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '179px',
          left: '434px',
          width: '9px',
          height: '48px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-26') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-26') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-26') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-26') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-26'])
        }}>
        </div>

        <div className="route-29" data-tip="Route 29" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '224px',
          left: '308px',
          width: '91px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-29') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-29') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-29') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-29') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-29'])
        }}>
        </div>

        <div className="route-28" data-tip="Route 28" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '154px',
          left: '423px',
          width: '21px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-28') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-28') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-28') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-28') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-28'])
        }}>
        </div>

        <div className='mt-silver' data-tip="Mount Silver" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '149px',
          left: '404px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('mt-silver') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('mt-silver') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('mt-silver') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('mt-silver') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['mt-silver'])
        }}></div>

        <div className='cherrygrove-city' data-tip="Cherrygrove City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '214px',
          left: '280px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('cherrygrove-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('cherrygrove-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('cherrygrove-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('cherrygrove-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['cherrygrove-city'])
        }}></div>

        <div className="route-46" data-tip="Route 46" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '177px',
          left: '349px',
          width: '9px',
          height: '49px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-46') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-46') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-46') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-46') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-46'])
        }}>
        </div>

        <div className="route-45" data-tip="Route 45" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '117px',
          left: '369px',
          width: '9px',
          height: '61px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-45') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-45') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-45') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-45') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-45'])
        }}>
        </div>

        <div className="route-45" data-tip="Route 45" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '169px',
          left: '351px',
          width: '19px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-45') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-45') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-45') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-45') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-45'])
        }}>
        </div>

      </div>
    )
  }
}