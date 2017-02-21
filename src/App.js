import React from 'react';
import className from 'classnames';
import Cube from './Components/Shared/Cube';
import Constants from './Constants';
import Theme from './Components/Theme';
import './Styles/App.css';

import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';

export default class App extends React.Component {

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
            height={Constants.headerHeight}
            isAtRoot={isAtRoot}
            />
          <div
            className='app__content'
            style={{
              marginTop: Constants.headerHeight,
              maxWidth: Constants.screenWidth
            }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
