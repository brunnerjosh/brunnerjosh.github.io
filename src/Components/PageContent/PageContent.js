import React from 'react';
import '../../Styles/PageContent.css';
import '../../Styles/Grid.css';

export default class PageContent extends React.Component {

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
      <div className='page-content'>
        <div className='page-content__container'>
          <div className='row'>
            {this.renderLeftSide()}
            {this.renderRightSide()}
          </div>
        </div>
      </div>
    )
  }

}
