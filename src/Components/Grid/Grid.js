import React from 'react';
import GridCell from './GridCell';
import './Grid.css';

export default class Grid extends React.Component {

  determineCellBackground (index) {
    console.log('index', index);
    return 'red';
  }

  renderGridCells () {
    return this.props.items.map( (item, index) => {
      const cellBg = this.determineCellBackground(index);
      return <GridCell key={index} item={item} background={cellBg} />
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
