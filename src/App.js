import React from 'react';
import className from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Cube from './Components/Shared/Cube';
import Constants from './Constants';
import Theme from './Components/Theme';
import './Styles/App.css';

import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';

export default class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      headerHeight: '4em'
    }
  }

  renderHeaderLabel () {
    return (
      <div>
        <span className={'+bold'}>
          {(Constants.firstName + ' ' + Constants.lastName).toUpperCase()}
        </span>
        <span className={'+light'}>
          &nbsp;|&nbsp;
          <Cube sides={Constants.adjectives} />
        </span>
      </div>
    )
  }

  render () {
    const isAtRoot = this.props.location.pathname === '/'
    const baseAppClasses = className('app', {
      'at-root': isAtRoot
    })
    return (
      <div
        className={baseAppClasses}
        style={{ background: Theme.secondary.hex }}>
        <div className='app__container' >
          <Header
            label={this.renderHeaderLabel()}
            height={this.state.headerHeight}
            isAtRoot={isAtRoot}
            />
          <ReactCSSTransitionGroup
            component='div'
            className='app__content'
            transitionName='example'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            >
            <div
            key={this.props.location.pathname}
            style={{
              position: 'fixed',
                left: '50%',
                height: '100%',
                width: '100%',
                transform: 'translate(-50%, 0)'
            }}>
            <Background

              styles={{
                // top: 0,
                // left: 0,
                // position: 'fixed',
                // width: '100%',
                // height: '100%',
                // position: 'fixed',
                // left: '50%',
                // transform: 'translate(-50%, 0)',
                margin: '0 auto',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                paddingTop: this.state.headerHeight,
                maxWidth: Constants.screenWidth
              }}>
              {this.props.children}
            </Background>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

class Background extends React.Component {
  render () {
    return (<div style={this.props.styles}>{this.props.children}</div>)
  }
}
