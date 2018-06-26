import React from 'react';
import '../Styles/Screen.css';

function getCoordinates (letter) {
  switch (letter) {
    case 'h':
      return [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]
    case 'e':
      return [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 1, 1]]
    case 'l':
      return [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]
    case 'o':
      return [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]
    default:
      return [[],[],[],[],[]]
  }
}

export default class Screen extends React.Component {

  constructor (props) {
    super(props);

    const width = 32
    const height = 16

    this.state = {
      width,
      height,
      screen: initializeScreen(width, height, 'hello'),
      screen1: [
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
    this.setState({
      screen: this.state.screen
    })
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

function initializeScreen (width = 16, height = 10, msg) {
  const rows = []
  for (let i = 0; i < height; i++) {
    const row = []
    for (let j = 0; j < width; j++) {
      row.push('')
    }
    rows.push(row)
  }

  const wordCoordinates = msg.split('').map(getCoordinates)
  let letterOffset = 0
  wordCoordinates.forEach(coordinates => {
    console.log(coordinates)
    coordinates.forEach((cRow, cIdx) => {
      cRow.forEach((bit, bitIdx) => {
        rows[cIdx + Math.floor(height / 2)][bitIdx + letterOffset] = bit ? 'X' : ''
      })
    })
    letterOffset += coordinates[0].length + 1
  })

  return rows
}
