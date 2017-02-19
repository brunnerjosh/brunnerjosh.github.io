import React from 'react';
import Constants from '../../Constants';
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
    const { fontSize } = this.props;
    return (
      <div
        className='page-content'
        style={{ fontSize: (fontSize / Constants.fontSize.base) + 'em' }}>
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
