import React from 'react';
import className from 'classnames';
import '../../Styles/Card.css';

export default class Card extends React.Component {
  render () {
    const cardClasses = className('card', {
      'is-disabled': this.props.disabled
    })
    return (
      <div
        className={cardClasses}
        onClick={this.props.onClick}>
        <div
          className='card__photo'
          style={{
            backgroundImage: `url(${this.props.imgUrl})`
          }}/>
        <div className='card__content'>
          <h2>{this.props.header}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
