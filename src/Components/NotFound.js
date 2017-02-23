import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '6em', lineHeight: '2em'}}>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <hr />
        <p>Sorry, but the page you are looking for does not exist.</p>
        <Link to='/'>Take me home</Link>
      </div>
    )
  }
}
