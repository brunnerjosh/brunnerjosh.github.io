import React from 'react';
import Icons from './Icons';
import './Icon.css';

class Icon extends React.Component {
  render () {
    const { icon, color } = this.props;
    const IconComponent = Icons[icon];

    const styles = {
      width: '3em',
      height: '3em',
      color: color || 'black'
    }

    if (!IconComponent) console.warn(`Unable to load ${icon} icon :(`);

    return (
      <span className={`icon +${icon && icon.toLowerCase()}`} style={Object.assign(styles, this.props.style)}>
        {IconComponent && IconComponent()}
      </span>
    );
  }
}

export default Icon;
