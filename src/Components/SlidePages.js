import React from 'react';
import PageTransition from 'react-router-page-transition';

import Constants from '../Constants';
import '../Styles/SlidePages.css';

export default class SlidePages extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      duration: '500',
      bezier: 'ease'
    }
  }

  render () {
    const { duration, bezier } = this.state;
    return (
      <PageTransition timeout={duration}>
        <div
          className='slide-pages transition-item'
          style={{
            height: `calc(100vh - ${Constants.headerHeight})`,
            transition: `transform ${duration}ms ${bezier}, opacity ${duration}ms ${bezier}`
          }}>
          {this.props.children}
        </div>
      </PageTransition>
    )
  }
}
