import React from 'react';
import className from 'classnames';
import Cube from '../Components/Shared/Cube';
import Constants from '../Constants';
import Icon from '../Components/Icon/Icon';
import Theme from '../Components/Theme';
import '../Styles/App.css';

import Header from '../Components/Layout/Header';
// import Footer from '../Components/Layout/Footer';

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

  renderBugLogger () {
    return process.env.NODE_ENV === 'development' ? (
      <div className='app__bugs' onClick={() => window.open(Constants.bugs, '_blank')}>
        <Icon color={'#fafafa'} icon={'Bug'} />
      </div>
    ) : null;
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
            {...this.props}
            />
          <div
            className='app__content'
            style={{ marginTop: Constants.headerHeight }}>
            {this.props.children}
          </div>
          {this.renderBugLogger()}
        </div>
      </div>
    );
  }
}
