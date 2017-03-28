import React from 'react';
import Icon from '../Icon/Icon';
import Theme from '../Theme';
import '../../Styles/Header.css';

export default class Header extends React.Component {

  constructor (props) {
    super(props);
    this.handleBackButtonPress = this.handleBackButtonPress.bind(this);
  }

  handleBackButtonPress () {
    // Make sure we're not already at the landing page
    if (!this.props.isAtRoot) {
      // IF we got to the current page from a previous page, allow the 'goBack' method to be called
      if (this.props.routing.locationBeforeTransitions.action === 'PUSH') {
        this.props.goBack()
      // Otherwise, it means we landed on this page (likely from an outside link) and don't have a page to go back to. Thus, just pop back to the home page.
      } else {
        this.props.push('/');
      }
    }
  }

  renderBackIcon () {
    return (
      <div
        style={{
          opacity: this.props.isAtRoot ? 0 : 1,
          cursor: this.props.isAtRoot ? 'default' : 'pointer'
        }}
        className={'header__back-icon'}
        onClick={this.handleBackButtonPress} >
        <Icon color={'white'} icon={'Back'} />
      </div>
    );
  }

  render () {
    return (
      <div
        className='header'
        style={{
          height: this.props.height,
          background: Theme.primary.hex,
          borderBottom: `.3em solid ${Theme.tertiary.hex}`
        }}>
        <div className='header__container'>
          {this.renderBackIcon()}
          <div className='header__content'>
            <div className={'header__label'} onClick={this.props.push.bind(null, '/')}>
              {this.props.label}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
