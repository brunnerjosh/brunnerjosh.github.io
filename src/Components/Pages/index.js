import React from 'react';
import NotFound from '../NotFound';
import Article from './Article';
import views from './views';
import articles from './articles';

export default class Pages extends React.Component {
  render () {
    const currentPath = this.props.route.path;
    const { articleId } = this.props.params;

    // TODO: combine these two object so that we can just make one call to the object and use its properties
    const PageComponent = articleId ? Article : views[currentPath];
    const pageContent = articleId ? articles[articleId] : false;

    return (pageContent || PageComponent) ? (
      <PageComponent pageContent={pageContent} {...this.props} />
    ) : <NotFound {...this.props}/>
  }
}
