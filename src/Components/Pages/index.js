import React from 'react';
import renders from './components';
import contentList from './_content';

export default class Pages extends React.Component {
  render () {
    const currentPath = this.props.route.path;

    // TODO: combine these two object so that we can just make one call to the object and use its properties
    const PageComponent = renders[currentPath];
    const pageMarkdown = contentList[currentPath];

    return <PageComponent pageMarkdown={pageMarkdown} />
  }
}
