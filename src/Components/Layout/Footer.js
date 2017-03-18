import React from 'react';
import Theme from '../Theme';
import '../../Styles/Footer.css';

export default class Footer extends React.Component {
  render () {
    return (
      <div
        className='footer'
        style={{
          height: this.props.height,
          background: Theme.primary.hex,
          borderTop: `.3em solid ${Theme.tertiary.hex}`
        }}
        />
    )
  }
}
