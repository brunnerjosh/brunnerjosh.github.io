import React from 'react';
import '../Styles/Screen.css';

export default class Screen extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      screen: [
        ['', '', '', ''],
        ['', '', 'X', ''],
        ['', 'X', '', 'X'],
        ['X', '', '', '']
      ]
    };

    this.renderRow = this.renderRow.bind(this)
    this.renderPixel = this.renderPixel.bind(this)
    this.shiftPixels = this.shiftPixels.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.shiftPixels, 300);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  shiftPixels () {
    const newScreen = this.state.screen.map(prevRow => {
      const copiedRow = prevRow.concat()
      copiedRow.push(copiedRow.splice(0, 1)[0])
      return copiedRow
    })
    this.setState({ screen: newScreen })
  }

  renderPixel (data, index) {
    return (
      <div key={index} className='screen__row-pixel'>
      {data || '__'}
      </div>
    )
  }

  renderRow (row, index) {
    return (
      <div key={index} className='screen__row'>
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
