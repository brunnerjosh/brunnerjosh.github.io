import React from 'react';
import Theme from '../Theme';

export default class GridCell extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  fibonacci (number) {
    if (number <= 1) {
      return 1;
    }
    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  }

  determineCellBackground (index) {
    let multiplier;
    const itemsLength = this.props.items.length;
    const levels = 5;
    let multiplierMap = [];

    /**
     * Calculate the multiplier to use depending on the
     * fibonacci level we are currently on so that we
     * progressively get darker as the levels increase.
     *
     * Do this for the hovered and non-hovered state of the cell.
     */
    if (this.state.isHovered) {
      for (let i = levels; i > 0; i--) {
        multiplierMap.push(this.fibonacci(i) * .1)
      }
    } else {
      for (let i = 1; i <= levels; i++) {
        multiplierMap.push(this.fibonacci(i) * .1)
      }
    }

    // 1st cell
    if (itemsLength / index === itemsLength) {
      multiplier = multiplierMap[0]
    }

    // 2nd cell level
    else if (index < (itemsLength / 2) && !(index % 2)) {
      multiplier = multiplierMap[1]
    }

    // 3rd cell level
    else if (index >= (itemsLength / 3) && (index <= itemsLength - 2) && (index % 2)) {
      multiplier = multiplierMap[2]
    }

    // 4th cell level
    else if (index > (itemsLength / 2) && !(index % 2)) {
      multiplier = multiplierMap[3]
    }

    // Last cell
    else if (itemsLength / index === 1) {
      multiplier = multiplierMap[4]
    }

    const { r, g, b } = Theme.simpleAndFresh.color4;
    return `rgba(${r}, ${g}, ${b}, ${.2 + multiplier})`;
  }

  render () {
    const { index } = this.props;
    const cellWidth = (100 / 3) + '%';
    const cellBg = this.determineCellBackground(index+1);

    return (
      <div
        className={'grid__cell'}
        onClick={this.props.items[index].onClick}
        onMouseEnter={() => { this.setState({ isHovered: true }) }}
        onMouseLeave={() => { this.setState({ isHovered: false }) }}
        style={{
          flexBasis: cellWidth,
          backgroundColor: cellBg
        }}
        >
        <div className={'grid__cell-container'}>
          {this.props.items[index].label}
        </div>
      </div>
    )
  }
}
