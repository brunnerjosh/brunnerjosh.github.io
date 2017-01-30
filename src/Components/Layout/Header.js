import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return (
      <div>
      Header
      <Link to={`/about`}>About</Link>
      </div>
    )
  }
}
