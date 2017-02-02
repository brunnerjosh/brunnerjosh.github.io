import React from 'react';
import classNames from 'classnames';
import Icons from './Icons';
import './Icon.css';

class Icon extends React.Component {
  render () {
    const { icon, className, size, color, rotate } = this.props;
    const IconComponent = Icons[icon];
    const classes = classNames(
      'icon',
      className,
      {
        [size]: size,
        [color]: color,
        [`rotate-${rotate}`]: rotate
      }
    );

    const styles = {
      width: '4em',
      color: this.props.color || 'black'
    }
    console.log('icon alt', this.props.alt);
    return (
      <span className={'icon'} style={styles}>
        {IconComponent && IconComponent()}
      </span>
    );
  }
}

export default Icon;
