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
            backgroundColor: mode === 0 ? selectedArea === 'new-bark-town' ? 'indianred' : ''
              : matchedAreas && matchedAreas.indexOf('new-bark-town') >= 0 ? 'indianred' : '' ,
            animation: mode === 0 ? selectedArea === 'new-bark-town' ? 'pulse 2s infinite' : ''
              : matchedAreas && matchedAreas.indexOf('new-bark-town') >= 0 ? 'pulse 2s infinite' : ''
          }} onClick={(e) => {
            if (mode === 1) return
            if (e.stopPropagation) e.stopPropagation()
            setSelectedArea('new-bark-town')
          }}></div>

      </div>
    )
  }
}