import React from 'react';
import './Styles/App.css';

import Header from './Components/Layout/Header';
// import Footer from './Components/Layout/Footer';

export default class App extends React.Component {

  render () {
    return (
      <div className="app">
        <div className="app__container">
          {/*<Header />*/}
          <div className="app__content">
            {this.props.children}
          </div>
          {/*<Footer />*/}
        </div>
      </div>
    );
  }
}
