import React from 'react';
import copy from 'copy-to-clipboard';
import Grid from './Grid/Grid';

export default class Landing extends React.Component {

  constructor (props) {
    super(props);

    const cells = [
      { label: 'About', img: 'About' },
      { label: 'Professional', img: 'Work' },
      { label: 'Education', img: 'Graduation' },
      { label: 'Personal', img: 'Personal' },
      { label: 'Thoughts', img: 'Thoughts' },
      { label: 'Hobbies', img: 'Hobby' },
      { label: 'Mail', img: 'Mail', onClick: () => {
        const copySuccess = copy('joshuaebrunner@gmail.com');
        if (copySuccess) { alert('email copied to clipboard');
        } else { alert('my email is joshuaebrunner@gmail.com'); }
      }},
      { label: 'LinkedIn', img: 'LinkedIn' },
      { label: 'GitHub', img: 'GitHub' }
    ]

    this.state = {
      cells: this.addCellClickHandler(cells),
      activeCell: ''
    };

  }

  handleCellClick (label) {
    this.setState({
      activeCell: this.state.activeCell === label ? '' : label
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

  render () {

    return (
      <Grid items={this.state.cells} activeCell={this.state.activeCell} />
    )
  }
}
