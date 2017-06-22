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

        <div className='slateport-city' data-tip="Slateport City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '191px',
          left: '138px',
          width: '25px',
          height: '39px',
          borderRadius: '40%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('slateport-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('slateport-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('slateport-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('slateport-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['slateport-city'])
        }}></div>

        <div className="route-132" data-tip="Route 132" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '200px',
          left: '164px',
          width: '99px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-132') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-132') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-132') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-132') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-132'])
        }}>
        </div>

        <div className='pacifidlog-town' data-tip="Pacifidlog Town" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '195px',
          left: '264px',
          width: '17px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('pacifidlog-town') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('pacifidlog-town') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('pacifidlog-town') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('pacifidlog-town') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['pacifidlog-town'])
        }}></div>

        <div className="route-129" data-tip="Route 129" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '200px',
          left: '327px',
          width: '47px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-129') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-129') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-129') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-129') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-129'])
        }}>
        </div>

        <div className="route-130" data-tip="Route 130" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '200px',
          left: '283px',
          width: '45px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-130') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-130') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-130') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-130') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-130'])
        }}>
        </div>

        <div className='evergrande-city' data-tip="Evergrande City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '166px',
          left: '395px',
          width: '25px',
          height: '39px',
          borderRadius: '40%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('evergrande-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('evergrande-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('evergrande-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('evergrande-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['evergrande-city'])
        }}></div>

        <div className='hoenn-victory-road' data-tip="Hoenn Victory Road" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '175px',
          left: '380px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('hoenn-victory-road-1') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('hoenn-victory-road-1') >= 0
            || matchedAreas && matchedAreas.indexOf('hoenn-victory-road-2') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('hoenn-victory-road-1') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('hoenn-victory-road-1') >= 0
            || matchedAreas && matchedAreas.indexOf('hoenn-victory-road-2') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['hoenn-victory-road-1', 'hoenn-victory-road-2'])
        }}></div>

        <div className="route-128" data-tip="Route 128" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '187px',
          left: '372px',
          width: '21px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-128') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-128') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-128') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-128') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-128'])
        }}>
        </div>

        <div className="route-127" data-tip="Route 127" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '148px',
          left: '365px',
          width: '9px',
          height: '54px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-127') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-127') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-127') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-127') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-127'])
        }}>
        </div>

        <div className="route-126" data-tip="Route 126" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '159px',
          left: '341px',
          width: '27px',
          height: '9px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-126') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-126') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-126') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-126') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-126'])
        }}>
        </div>

        <div className='sootopolis-city' data-tip="Sootopolis City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '150px',
          left: '314px',
          width: '27px',
          height: '27px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('sootopolis-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('sootopolis-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('sootopolis-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('sootopolis-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['sootopolis-city'])
        }}></div>

        <div className="route-124" data-tip="Route 124" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '131px',
          left: '324px',
          width: '29px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-124'])
        }}>
        </div>
        <div className="route-124" data-tip="Route 124" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '138px',
          left: '324px',
          width: '8px',
          height: '12px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-124'])
        }}>
        </div>
        <div className="route-124" data-tip="Route 124" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '107px',
          left: '317px',
          width: '30px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-124') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-124') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-124'])
        }}>
        </div>

        <div className="route-125" data-tip="Route 125" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '113px',
          left: '343px',
          width: '21px',
          height: '7px',
          transform: 'rotateZ(45deg)',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-125') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-125') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-125') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-125') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-125'])
        }}>
        </div>

        <div className='mossdeep-city' data-tip="Mossdeep City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '123px',
          left: '355px',
          width: '39px',
          height: '25px',
          borderRadius: '40%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('mossdeep-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('mossdeep-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('mossdeep-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('mossdeep-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['mossdeep-city'])
        }}></div>

        <div className='lilycove-city' data-tip="Lilycove City" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '98px',
          left: '275px',
          width: '39px',
          height: '25px',
          borderRadius: '40%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('lilycove-city') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('lilycove-city') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('lilycove-city') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('lilycove-city') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['lilycove-city'])
        }}></div>

        <div className='hoenn-safari-zone' data-tip="Hoenn Safari Zone" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '85px',
          left: '253px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: mode === 0 ? selectedArea.indexOf('hoenn-safari-zone') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('hoenn-safari-zone') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('hoenn-safari-zone') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('hoenn-safari-zone') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['hoenn-safari-zone'])
        }}></div>

        <div className="route-121" data-tip="Route 121" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '108px',
          left: '228px',
          width: '45px',
          height: '7px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-121') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-121') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-121') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-121') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-121'])
        }}>
        </div>

        <div className="route-120" data-tip="Route 120" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '66px',
          left: '222px',
          width: '8px',
          height: '48px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-120') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-120') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-120') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-120') >= 0? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-120'])
        }}>
        </div>

      </div>
    )
  }
}