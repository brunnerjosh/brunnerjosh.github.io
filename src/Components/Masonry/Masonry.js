import React from 'react';
import MasonryCell from './MasonryCell';
import '../../Styles/Masonry.css';

export default class Masonry extends React.Component {

  renderMasonryCells () {
    return this.props.items.map( (item, index) => {
      return (
        <MasonryCell
          key={index}
          index={index}
          activeCell={this.props.activeCell}
          items={this.props.items} />
      )
    })
  }

  render () {
    return (
      <div className='masonry'>
        <div className='masonry__container'>
          {this.renderMasonryCells()}
        </div>
      </div>
    )
  }
}
