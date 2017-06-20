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

        <div className='mt-silver' data-tip="Mt. Silver" style={{
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

        <div className='dark-cave' data-tip="Dark Cave" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '150px',
          left: '325px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('dark-cave') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('dark-cave') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('dark-cave') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('dark-cave') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['dark-cave'])
        }}></div>

        <div className='blackthorn-city' data-tip="Blackthorn City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '89px',
          left: '360px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('blackthorn-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('blackthorn-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('blackthorn-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('blackthorn-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['blackthorn-city'])
        }}></div>

        <div className='dragons-den' data-tip="Dragons Den" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '81px',
          left: '381px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('dragons-den') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('dragons-den') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('dragons-den') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('dragons-den') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['dragons-den'])
        }}></div>

        <div className='ice-path' data-tip="Ice Path" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '95px',
          left: '345px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('ice-path') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('ice-path') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('ice-path') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('ice-path') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['ice-path'])
        }}></div>

        <div className="route-44" data-tip="Route 44" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '100px',
          left: '327px',
          width: '18px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-44') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-44') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-44') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-44') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-44'])
        }}>
        </div>

        <div className="route-42" data-tip="Route 42" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '100px',
          left: '264px',
          width: '36px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-42') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-42') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-42') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-42') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-42'])
        }}>
        </div>

        <div className="route-42" data-tip="Route 42" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '100px',
          left: '208px',
          width: '36px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-42') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-42') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-42') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-42') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-42'])
        }}>
        </div>

        <div className="route-43" data-tip="Route 43" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '77px',
          left: '309px',
          width: '8px',
          height: '14px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-43') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-43') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-43') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-43') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-43'])
        }}>
        </div>

        <div className='lake-of-rage' data-tip="Lake of Rage" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '59px',
          left: '304px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('lake-of-rage') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('lake-of-rage') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('lake-of-rage') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('lake-of-rage') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['lake-of-rage'])
        }}></div>

        <div className="route-38" data-tip="Route 38" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '100px',
          left: '91px',
          width: '90px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-38') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-38') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-38') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-38') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-38'])
        }}>
        </div>

        <div className="route-30" data-tip="Route 30" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '143px',
          left: '289px',
          width: '9px',
          height: '71px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-30') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-30') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-30') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-30') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-30'])
        }}>
        </div>

        <div className="route-31" data-tip="Route 31" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '135px',
          left: '268px',
          width: '29px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-31') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-31') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-31') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-31') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-31'])
        }}>
        </div>

        <div className='sprout-tower' data-tip="Sprout Tower" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '116px',
          left: '262px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('sprout-tower') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('sprout-tower') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('sprout-tower') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('sprout-tower') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['sprout-tower'])
        }}></div>

        <div className='violet-city' data-tip="Violet City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '126px',
          left: '240px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('violet-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('violet-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('violet-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('violet-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['violet-city'])
        }}></div>

        <div className="route-32" data-tip="Route 32" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '154px',
          left: '250px',
          width: '9px',
          height: '120px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-32') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-32') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-32') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-32') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-32'])
        }}>
        </div>

      </div>
    )
  }
}