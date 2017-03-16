import React from 'react';
import '../../Styles/Card.css';

export default class Card extends React.Component {
  render () {
    return (
      <div
        className='card'
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
