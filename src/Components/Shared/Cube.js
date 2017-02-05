import React from 'react';
import '../../Styles/Cube.css';

const MAX_ROTATIONS = 100;

export default class Cube extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      rotateX: 0,
      currentSide: 'front'
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
      rotateX: this.hasReachedMaxRotations() ? 0 : this.state.rotateX - 90
    });
  }

  hasReachedMaxRotations () {
    return this.state.rotateX / 90 * -1 === MAX_ROTATIONS;
  }

  mapIndexToSide (index) {
    const sideMap = {
      0: 'front',
      1: 'top',
      2: 'back',
      3: 'bottom'
    }
    return sideMap[index];
  }

  renderCubeSides () {
    return this.props.sides.map( (side, index) => {
      return (
        <div key={index} className={`cube__side side-${this.mapIndexToSide(index)}`}>
        {side}
        </div>
      )
    })
  }

  render () {
    return (
      <div className='cube'>
        <div className={'cube__container'}
          style={this.rotateCube()}>
          {this.renderCubeSides()}
        </div>
      </div>
    )
  }
}
