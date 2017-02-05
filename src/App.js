import React from 'react';
import Cube from './Components/Shared/Cube';
import './Styles/App.css';

import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';

export default class App extends React.Component {

  render () {
    const cubeSides = [
      'software engineer',
      'photographer',
      'product developer',
      'husband'
    ]
    const headerLabel = (
      <div>
        <span className={'+bold'}>JOSH BRUNNER</span>
        <span className={'+light'}>
          &nbsp;|&nbsp;
          <Cube sides={cubeSides} />
        </span>
      </div>
    );
    return (
      <div className="app">
        <div className="app__container">
          <Header
            label={headerLabel}
            isAtRoot={this.props.location.pathname === '/'}
            />
          <div className="app__content">
            {this.props.children}
          </div>
          {/*<Footer />*/}
        </div>
      </div>
    );
  }
}
