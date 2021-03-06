import React from 'react';
import copy from 'copy-to-clipboard';
import Masonry from './Masonry/Masonry';
import Icon from './Icon/Icon';
import Popup from './Popup';
import Constants from '../Constants';

import '../Styles/Landing.css';
import '../Styles/EmailPopup.css';

export default class Landing extends React.Component {

  constructor (props) {
    super(props);

    const cells = [
      { label: 'About', img: 'About' },
      { label: 'Professional', img: 'Work' },
      { label: 'Education', img: 'Graduation' },
      { label: 'Personal', img: 'Personal' },
      { label: 'Thoughts', img: 'Thoughts' },
      { label: 'Photography', img: 'Camera' },
      { label: 'Mail', img: 'Mail', onClick: () => {
        this.setState({ activeCell: 'Mail' })
      }},
      { label: 'LinkedIn', img: 'LinkedIn', onClick: () => {
        window.open(Constants.linkedin, '_blank');
      }},
      { label: 'GitHub', img: 'GitHub', onClick: () => {
        window.open(Constants.github, '_blank')
      } }
    ]

    this.state = {
      cells: this.addCellClickHandler(cells),
      activeCell: '',
      emailCopied: false
    };

     this.handleDismissPopup = this.handleDismissPopup.bind(this);
     this.handleEmailCopy = this.handleEmailCopy.bind(this);
  }

  handleCellClick (label) {
    this.setState({
      activeCell: this.state.activeCell === label ? '' : label
    })
    this.props.push(`/${label.toLowerCase()}`)
  }

  handleDismissPopup () {
    this.setState({
      activeCell: ''
    })
  }

  addCellClickHandler (cells) {
    return cells.map( cell => {
      if (!cell.onClick) {
        cell.onClick = this.handleCellClick.bind(this, cell.label)
      }
      return cell;
    })
  }

  handleEmailCopy () {
    this.setState({ emailCopied: true })
    setTimeout(() => {
    this.setState({ emailCopied: false })
    }, 1500)
    copy(Constants.email)
  }

  renderMailPopup () {
    const mailPopupContent = (
      <div className={'email-popup'}>
        <div className='email-popup__row'>
          {this.state.emailCopied ? 'Copied to clipboard' : ''}
          <div style={{
            opacity: this.state.emailCopied ? 0 : 1,
            position: this.state.emailCopied ? 'absolute' : ''
          }}>{Constants.email}</div>
          <div
            title='Copy to clipboard'
            className='email-popup__copy-icon'
            onClick={this.handleEmailCopy} >
            <Icon icon={'Clipboard'} />
          </div>
        </div>
      </div>
    )

    return this.state.activeCell === 'Mail' ? (
      <Popup
        actionSuccess={this.state.emailCopied}
        dismiss={this.handleDismissPopup}
        content={mailPopupContent} />
    ) : null;
  }

  render () {
    return (
      <div className={'landing'}>
        {this.renderMailPopup()}
        <Masonry
          items={this.state.cells}
          activeCell={this.state.activeCell}
          />
      </div>
    )
  }
}
