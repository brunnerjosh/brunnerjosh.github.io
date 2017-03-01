import React from 'react';
import NotFound from '../NotFound';
import Article from './Article';
import views from './views';
import contentList from './_sections';

export default class Pages extends React.Component {
  render () {
    const currentPath = this.props.route.path;
    const { articleId } = this.props.params;

    // TODO: combine these two object so that we can just make one call to the object and use its properties
    const PageComponent = articleId ? Article : views[currentPath];
    const pageMarkdown = articleId ? contentList.articles[articleId] : contentList[currentPath];

    return pageMarkdown ? (
      <PageComponent
        pageMarkdown={pageMarkdown}
        {...this.props} />
      ) : <NotFound />
  }
}
