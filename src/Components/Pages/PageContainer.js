import React from 'react';
import '../../Styles/PageContainer.css';
import '../../Styles/Grid.css';

export default class PageContainer extends React.Component {

  renderLeftSide () {
    const { leftSide } = this.props;
    return leftSide ? (
      <div className={leftSide.classes}>
        {leftSide.content}
      </div>
    ) : null
  }

  renderRightSide () {
    const { rightSide } = this.props;
    return rightSide ? (
      <div className={rightSide.classes}>
        {rightSide.content}
      </div>
    ) : null
  }

  render () {
    return (
      <div className='page'>
        <div className='page__container'>
          <div className='row'>
            {this.renderLeftSide()}
            {this.renderRightSide()}
          </div>
        </div>
      </div>
    )
  }

}
