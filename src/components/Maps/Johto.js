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

        <div className="route-37" data-tip="Route 37" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '118px',
          left: '190px',
          width: '9px',
          height: '20px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-37') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-37') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-37') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-37') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-37'])
        }}>
        </div>

        <div className="route-36" data-tip="Route 36" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '135px',
          left: '164px',
          width: '76px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-36') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-36') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-36') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-36') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-36'])
        }}>
        </div>

        <div className='union-cave' data-tip="Union Cave" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '274px',
          left: '245px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('union-cave') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('union-cave') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('union-cave') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('union-cave') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['union-cave'])
        }}></div>

        <div className="route-33" data-tip="Route 33" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '279px',
          left: '208px',
          width: '37px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-33') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-33') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-33') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-33') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-33'])
        }}>
        </div>

        <div className='ilex-forest' data-tip="Ilex Forest" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '274px',
          left: '145px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('ilex-forest') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('ilex-forest') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('ilex-forest') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('ilex-forest') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['ilex-forest'])
        }}></div>

        <div className="route-34" data-tip="Route 34" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '224px',
          left: '149px',
          width: '9px',
          height: '50px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-34') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-34') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-34') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-34') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-34'])
        }}>
        </div>

        <div className="route-35" data-tip="Route 35" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '150px',
          left: '149px',
          width: '9px',
          height: '31px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-35') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-35') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-35') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-35') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-35'])
        }}>
        </div>

        <div className='national-park' data-tip="National Park" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '131px',
          left: '145px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('national-park') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('national-park') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('national-park') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('national-park') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['national-park'])
        }}></div>

        <div className="route-39" data-tip="Route 39" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '107px',
          left: '90px',
          width: '9px',
          height: '19px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-39') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-39') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-39') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-39') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-39'])
        }}>
        </div>

        <div className='olivine-city' data-tip="Olivine City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '125px',
          left: '81px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('olivine-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('olivine-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('olivine-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('olivine-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['olivine-city'])
        }}></div>

        <div className="route-40" data-tip="Route 40" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '149px',
          left: '50px',
          width: '9px',
          height: '34px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-40') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-40') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-40') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-40') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-40'])
        }}>
        </div>

        <div className="route-41" data-tip="Route 41" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '202px',
          left: '50px',
          width: '9px',
          height: '31px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-41') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-41') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-41') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-41') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-41'])
        }}>
        </div>
        <div className="route-41" data-tip="Route 41" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '224px',
          left: '43px',
          width: '7px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-41') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-41') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-41') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-41') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-41'])
        }}>
        </div>

        <div className='cianwood-city' data-tip="Cianwood City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '215px',
          left: '16px',
          width: '28px',
          height: '29px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('cianwood-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('cianwood-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('cianwood-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('cianwood-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['cianwood-city'])
        }}></div>

        <div className="route-48" data-tip="Route 48" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '209px',
          left: '14px',
          width: '9px',
          height: '12px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-48') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-48') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-48') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-48') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-48'])
        }}>
        </div>

        <div className='johto-safari' data-tip="Johto Safari" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '190px',
          left: '8px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('johto-safari-wasteland') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('johto-safari-wasteland') >= 0
            || matchedAreas.indexOf('johto-safari-savannah') >= 0
            || matchedAreas.indexOf('johto-safari-wetland') >= 0
            || matchedAreas.indexOf('johto-safari-forest') >= 0
            || matchedAreas.indexOf('johto-safari-swamp') >= 0
            || matchedAreas.indexOf('johto-safari-marshland') >= 0
            || matchedAreas.indexOf('johto-safari-desert') >= 0
            || matchedAreas.indexOf('johto-safari-plains') >= 0
            || matchedAreas.indexOf('johto-safari-meadow') >= 0
            || matchedAreas.indexOf('johto-safari-peak') >= 0
            || matchedAreas.indexOf('johto-safari-mountain') >= 0
            || matchedAreas.indexOf('johto-safari-rockybeach') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('johto-safari-wasteland') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('johto-safari-wasteland') >= 0
            || matchedAreas.indexOf('johto-safari-savannah') >= 0
            || matchedAreas.indexOf('johto-safari-wetland') >= 0
            || matchedAreas.indexOf('johto-safari-forest') >= 0
            || matchedAreas.indexOf('johto-safari-swamp') >= 0
            || matchedAreas.indexOf('johto-safari-marshland') >= 0
            || matchedAreas.indexOf('johto-safari-desert') >= 0
            || matchedAreas.indexOf('johto-safari-plains') >= 0
            || matchedAreas.indexOf('johto-safari-meadow') >= 0
            || matchedAreas.indexOf('johto-safari-peak') >= 0
            || matchedAreas.indexOf('johto-safari-mountain') >= 0
            || matchedAreas.indexOf('johto-safari-rockybeach') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['johto-safari-wasteland',
            'johto-safari-savannah',
            'johto-safari-wetland',
            'johto-safari-forest',
            'johto-safari-swamp',
            'johto-safari-marshland',
            'johto-safari-desert',
            'johto-safari-plains',
            'johto-safari-meadow',
            'johto-safari-peak',
            'johto-safari-mountain',
            'johto-safari-rockybeach'])
        }}></div>

      </div>
    )
  }
}