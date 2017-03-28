import React from 'react';
import classNames from 'classnames';
import Icon from './Icon/Icon';
import '../Styles/Popup.css';

const ANIMATION_DURATION = 350

export default class Popup extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isShowing: false
    }
    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({
        isShowing: true
      })
    }, 10)
  }

  handleDismissClick () {
    this.setState({
      isShowing: false
    })
    setTimeout( () => {
      this.props.dismiss()
    }, ANIMATION_DURATION)
  }

  render () {
    const popupContainerClasses = classNames('popup__container', {
      'is-success': this.props.actionSuccess
    })
    return (
      <div
        className={'popup'}
        style={{
          opacity: this.state.isShowing ? 1 : 0,
          transition: `opacity ${ANIMATION_DURATION}ms ease`
        }}>
        <div className='popup__close' onClick={this.handleDismissClick}>
          <div className='popup__close-icon'>
            <Icon color='white' icon='Close' />
          </div>
        </div>
        <div className={popupContainerClasses}>
          <div className={'popup__content'}>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

