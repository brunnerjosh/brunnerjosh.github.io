import React from 'react';

export default class GridCell extends React.Component {
  render () {
    console.log('grid item', this.props.item);
    const cellWidth = (100 / 3) + '%';
    return (
      <div
        className={'grid__cell'}
        onClick={this.props.item.onClick}
        style={{
          flexBasis: cellWidth,
          backgroundColor: this.props.background
        }}
        >
        <div className={'grid__cell-container'}>
          {this.props.item.label}
        </div>
      </div>
    )
  }
}
