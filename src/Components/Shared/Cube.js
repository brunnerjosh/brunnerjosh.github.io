import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../Styles/Cube.css';

const MAX_ROTATIONS = 100;
const SIDE_MAP = {
  0: 'front',
  1: 'top',
  2: 'back',
  3: 'bottom'
}

export default class Cube extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentSide: 0
    }
  }

  componentDidMount () {
    setInterval( () => {
      this.goToNext();
    }, 2000)
  }

  goToNext () {
    this.setState({
      currentSide: this.determineNextSideIndex()
    });
  }

  determineNextSideIndex () {
    const { currentSide } = this.state;
    const numberOfSides = Object.keys(SIDE_MAP).length;
    return currentSide + 1 === numberOfSides ? 0 : currentSide + 1;
  }

  renderCubeSides () {
    return this.props.sides.map( (side, index) => {
      const isActive = SIDE_MAP[index] === SIDE_MAP[this.state.currentSide];
      if (isActive) {
        return <div key={index} className='cube__side'>{side}</div>
      }
    })
  }

  render () {
    return (
      <div className='cube'>
        <div className={'cube__container'}>
          <ReactCSSTransitionGroup
            transitionName='cube__rotation'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
          {this.renderCubeSides()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
