import React from 'react';
import GridCell from './GridCell';
import Theme from '../Theme';
import './Grid.css';

export default class Grid extends React.Component {

  renderGridCells () {
    return this.props.items.map( (item, index) => {
      return (
        <GridCell
          key={index}
          index={index}
          activeCell={this.props.activeCell}
          items={this.props.items} />
      )
    })
  }

  render () {
    return (
      <div className='grid' style={{background: Theme.secondary.hex}}>
        <div className='grid__container'>
          {this.renderGridCells()}
        </div>
      </div>
    )
  }
}
