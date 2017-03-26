import React from 'react';
import NotFound from '../NotFound';
import PageContent from './PageContainer';

export default class Article extends React.Component {
  render () {
    const { pageContent } = this.props;
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: pageContent ? pageContent() : <NotFound {...this.props}/>
        }}
        />
    )
  }
}
