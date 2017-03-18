import React from 'react';
import Theme from '../Theme';
import '../../Styles/Footer.css';

export default class Footer extends React.Component {
  render () {
    return (
      <div
        className='footer'
        style={{ borderTop: `.3em solid ${Theme.tertiary.hex}` }}
        />
    )
  }
}
