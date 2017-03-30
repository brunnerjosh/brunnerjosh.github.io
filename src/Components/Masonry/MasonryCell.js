import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Theme from '../Theme';

export default class MasonryCell extends React.Component {

  fibonacci (number) {
    if (number <= 1) {
      return 1;
    }
    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  }


  determineCellMultiplier (index) {
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
    // if (this.state.isHovered) {
    //   for (let i = levels; i > 0; i--) {
    //     multiplierMap.push(this.fibonacci(i) * .1 + .15)
    //   }
    // } else {
    //   for (let i = 1; i <= levels; i++) {
    //     multiplierMap.push(this.fibonacci(i) * .1)
    //   }
    // }

    // NO HOVER STATE
    for (let i = levels+1; i > 0; i--) {
      multiplierMap.push(this.fibonacci(i) * .1)
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

    return multiplier;
  }

  determineInsetShadow (cellBgMultiplier) {
    return cellBgMultiplier > .69 ? .5 : cellBgMultiplier - .15
  }

  render () {
    const { index } = this.props;
    const cellWidth = (100 / 3) + '%';
    const { r, g, b } = Theme.quaternary;
    const cellMultiplier = this.determineCellMultiplier(index+1);
    const cellInsetShadow = this.determineInsetShadow(cellMultiplier);
    const cellClasses = classNames('masonry__cell', {
      'is-active': this.props.activeCell === this.props.items[index].label
    })

    return (
      <div
        className={cellClasses}
        onClick={this.props.items[index].onClick}
        style={{
          flexBasis: cellWidth,
          backgroundColor: `rgba(${r}, ${g}, ${b}, ${cellMultiplier})`,
          // TODO: the rgba here: 64, 170, 119 is a 25% shade of the Theme.quaternary.hex value. This needs refactor
          boxShadow: `inset 0.3em 0.3em 0.6em 0em rgba(64, 170, 119, ${cellInsetShadow})`
        }}
        >
        <div className={'masonry__cell-container'} title={this.props.items[index].label}>
          <div className={'masonry__cell-content'}>
            <div className={'masonry__cell-icon'}>
              <Icon color={Theme.primary.hex} icon={this.props.items[index].img} />
            </div>
            <div className={'masonry__cell-label'}>
              {this.props.items[index].label}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
