import React from 'react';
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
      rotateX: 0,
      currentSide: 0
    }
  }

  componentDidMount () {
    setInterval( () => {
      this.goToNext()
    }, 2000)
  }

  rotateCube () {
    return {
      // Rotate from back to front
      transform: `translateZ(-.6em) rotateX(${this.state.rotateX}deg)`,
      // If we are one away from reaching the MAX, turn transition off
      transition: this.state.rotateX === 0 ? 'initial' : ''
    }
  }

  goToNext () {
    this.setState({
      currentSide: this.determineNextSideIndex(),
      rotateX: this.hasReachedMaxRotations() ? 0 : this.state.rotateX - 90
    });
  }

  hasReachedMaxRotations () {
    return this.state.rotateX / 90 * -1 === MAX_ROTATIONS;
  }

  determineNextSideIndex () {
    const { currentSide } = this.state;
    const numberOfSides = Object.keys(SIDE_MAP).length;
    return currentSide + 1 === numberOfSides ? 0 : currentSide + 1;
  }

  renderCubeSides () {
    return this.props.sides.map( (side, index) => {
      const isActive = SIDE_MAP[index] === SIDE_MAP[this.state.currentSide];
      return (
        <div key={index} className={`cube__side side-${SIDE_MAP[index]} ${isActive ? 'is-active' : ''}`}>
        {side}
        </div>
      )
    })
  }

  render () {
    return (
      <div className='cube'>
        <div
          className={'cube__container'}
          style={this.rotateCube()}>
          {this.renderCubeSides()}
        </div>
      </div>
    )
  }
}
