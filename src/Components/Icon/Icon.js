import React from 'react';
import Icons from './Icons';
import './Icon.css';

class Icon extends React.Component {
  render () {
    const { icon, color } = this.props;
    const IconComponent = Icons[icon];

    const styles = {
      width: '3em',
      color: color || 'black'
    }

    return (
      <span className={'icon'} style={styles}>
        {IconComponent && IconComponent()}
      </span>
    );
  }
}

export default Icon;
