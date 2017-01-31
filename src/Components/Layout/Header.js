import React from 'react';
import { Link } from 'react-router';
import '../../Styles/Header.css';

export default class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header__container">
          HEADER
          <Link to={`/about`}>About</Link>
        </div>
      </div>
    )
  }
}
