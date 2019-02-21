import React from 'react';
import '../Styles/Screen.css';

function getCoordinates (letter) {
  switch (letter.toLowerCase()) {
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
      return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
    default:
      return [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]
  }
}

export default class Screen extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      height: 9,
      screen: [],
      screenText: 'hello world',
    };

    this.renderRow = this.renderRow.bind(this)
    this.renderPixel = this.renderPixel.bind(this)
    this.shiftPixels = this.shiftPixels.bind(this)
    this.updateScreenText = this.updateScreenText.bind(this)
  }

  componentDidMount () {
    this.updateScreenText({ target: { value: 'hello world zzz' }})
    // this.timer = setInterval(this.shiftPixels, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  updateScreenText (event) {
    const { height } = this.state
    this.setState({
      screenText: event.target.value,
      screen: initializeScreen(height, event.target.value)
    })
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
    // if (index < 10) {
    //   return <div style={{height: '1em', width: '1em'}}>hello</div>
    // }
    // return null
    // console.log(index)
    // if (index < 10) {
      return (
        <div
          key={index}
          className={`screen__row-pixel ${data ? 'isOn' : ''}`}
          />
      )
    // }
    // return null
  }

  renderRow (row, index) {
    // console.log('row', row.map((p,i) => {
    //   // console.log(p, i)
    //   if (!p) return ''
    //   return i < 10 && p
    // }))
    const rowBak = row.concat()
    return (
      <div key={index} className='screen__row'>
      {rowBak.splice(0, 10).map(this.renderPixel)}
      </div>
    )
  }

  render () {
    return (
      <div className={'screen'}>
        <div className='screen__input'>
          <input
            placeholder='hello world'
            value={this.state.screenText}
            onChange={this.updateScreenText} />
        </div>
        {this.state.screen.map(this.renderRow)}
      </div>
    )
  }
}

function initializeScreen (height, msg) {
  msg += '   '
  const width = 10 //msg.length * 4
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
  wordCoordinates.forEach((coordinates, idx) => {
    coordinates.forEach((cRow, cIdx) => {
      cRow.forEach((bit, bitIdx) => {
        if (idx < 10) {
          console.log('idx', idx)
          rows[cIdx + (Math.ceil(height / 2) - coordinates[0].length)][bitIdx + letterOffset] = bit ? 'X' : ''
        }
      })
    })
    letterOffset += coordinates[0].length + 1
  })

  return rows
}
