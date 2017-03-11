import React from 'react';
import PageContent from './PageContainer';

export default class Article extends React.Component {

  componentDidMount () {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(window.hljs.highlightBlock);
  }

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
