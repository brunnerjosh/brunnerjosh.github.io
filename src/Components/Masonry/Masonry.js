import React from 'react';
import MasonryCell from './MasonryCell';
import Theme from '../Theme';
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
      <div className='masonry' style={{ background: Theme.secondary.hex }}>
        <div className='masonry__container'>
          {this.renderMasonryCells()}
        </div>
      </div>
    )
  }
}
