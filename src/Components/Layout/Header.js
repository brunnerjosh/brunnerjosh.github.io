import React from 'react';
import { browserHistory } from 'react-router';
import Icon from '../Icon/Icon';
import Theme from '../Theme';
import '../../Styles/Header.css';

export default class Header extends React.Component {

  renderBackIcon () {
    return (
      <div
        style={{
          opacity: this.props.isAtRoot ? 0 : 1,
          cursor: this.props.isAtRoot ? 'default' : 'pointer'
        }}
        className={'header__back-icon'}
        onClick={browserHistory.goBack} >
        <Icon color={'white'} icon={'Back'} />
      </div>
    );
  }

  render () {
    return (
      <div className="header" style={{ background: Theme.primary.hex }}>
        {this.renderBackIcon()}
        <div className="header__container">
          <div className={'header__label'}>
            {this.props.label}
          </div>
        </div>
      </div>
    )
  }
}
