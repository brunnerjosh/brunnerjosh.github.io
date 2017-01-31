import React from 'react';

export default class GridCell extends React.Component {
  render () {
    console.log('grid item', this.props.item);
    return (
      <div onClick={this.props.item.onClick} className='grid__cell'>
        {this.props.item.label}
      </div>
    )
  }
}
