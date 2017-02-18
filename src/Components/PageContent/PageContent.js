import React from 'react';
import Constants from '../../Constants';
import '../../Styles/PageContent.css';
import '../../Styles/Grid.css';

export default class PageContent extends React.Component {

  render () {

    const { fontSize, leftSide, rightSide } = this.props;

    return (
      <div
        className='page-content'
        style={{ fontSize: (fontSize / Constants.fontSize.base) + 'em' }}>
        <div className='page-content__container'>
          <div className='row'>
              <div className={leftSide.classes}>
                  {leftSide.content}
              </div>
              <div className={rightSide.classes}>
                  {rightSide.content}
              </div>
          </div>
        </div>
      </div>
    )
  }

}
