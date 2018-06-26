import React from 'react';
import '../Styles/Screen.css';

export default class Screen extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      screen: [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
      ]
    };

    this.renderRow = this.renderRow.bind(this)
    this.renderPixel = this.renderPixel.bind(this)
  }

  renderPixel (data) {
    return (
      <div className='screen__row-pixel'>
      {data || '__'}
      </div>
    )
  }

  renderRow (row) {
    return (
      <div className='screen__row'>
      {row.map(this.renderPixel)}
      </div>
    )
  }

  render () {
    return (
      <div className={'screen'}>
        {this.state.screen.map(this.renderRow)}
      </div>
    )
  }
}
