import React from 'react';
import GridCell from './GridCell';
import './Grid.css';

export default class Grid extends React.Component {
  renderGridCells () {
    return this.props.items.map (item => {
      return <GridCell item={item} />
    })
  }

  render () {
    return (
      <div className='grid'>
        <div className='grid__container'>
          {this.renderGridCells()}
        </div>
      </div>
    )
  }
}
