import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../Styles/Cube.css';

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
    }, 4000)
  }

  goToNext () {
    this.setState({
      currentSide: this.determineNextSideIndex()
    });
  }

  determineNextSideIndex () {
    const { sides } = this.props;
    const { currentSide } = this.state;
    return currentSide + 1 === sides.length ? 0 : currentSide + 1;
  }

  renderCubeSide () {
    const { sides } = this.props;
    const { currentSide } = this.state;
    return (
      <div
        key={currentSide}
        className='cube__side'>
        {sides[currentSide]}
      </div>
    )
  }

  render () {
    return (
      <div className='cube'>
        <ReactCSSTransitionGroup
          transitionName='cube__rotation'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
        {this.renderCubeSide()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
