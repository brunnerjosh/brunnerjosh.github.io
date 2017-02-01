import React from 'react';
import { Link } from 'react-router';
import '../../Styles/Header.css';
import Theme from '../Theme';

export default class Header extends React.Component {
  render () {
    return (
      <div className="header" style={{ background: Theme.simpleAndFresh.color1.hex }}>
        <div className="header__container">
          JOSH BRUNNER | SOFTWARE ENGINEER
        </div>
      </div>
    )
  }
}
