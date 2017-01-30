import React from 'react';
import './Styles/App.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

export default class App extends React.Component {

  componentDidMount () {
    console.log('We are live!');
  }

  render () {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
