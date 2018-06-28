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
    case 'w':
      return [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1]]
    case 'r':
      return [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]]
    case 'd':
      return [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]]
    case ' ':
      return [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    default:
      return [[],[],[],[],[]]
  }
}

export default class Screen extends React.Component {

  constructor (props) {
    super(props);

    const msg = '  hello world'

    const width = msg.length * 4
    const height = 9

    this.state = {
      width,
      height,
      screen: initializeScreen(width, height, msg),
    };

    this.renderRow = this.renderRow.bind(this)
    this.renderPixel = this.renderPixel.bind(this)
    this.shiftPixels = this.shiftPixels.bind(this)
  }

  componentDidMount () {
    this.setState({
      screen: this.state.screen
    })
    this.timer = setInterval(this.shiftPixels, 75);
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
      <div
        key={index}
        className={`screen__row-pixel ${data ? 'isOn' : ''}`}
        />
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
    coordinates.forEach((cRow, cIdx) => {
      cRow.forEach((bit, bitIdx) => {
        rows[cIdx + (Math.ceil(height / 2) - coordinates[0].length)][bitIdx + letterOffset] = bit ? 'X' : ''
      })
    })
    letterOffset += coordinates[0].length + 1
  })

  return rows
}
