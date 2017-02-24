import React from 'react';
import PageContent from '../PageContainer';

export default class Thoughts extends React.Component {
  render () {
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: this.props.pageMarkdown()
        }}
        />
    )
  }
}
