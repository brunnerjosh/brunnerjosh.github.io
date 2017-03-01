import React from 'react';
import { Link } from 'react-router';
import PageContent from '../PageContainer';

export default class Personal extends React.Component {

  renderContent () {
    return (
      <div>
      {this.props.pageMarkdown()}
      <Link to='/articles/js_slideshow'>JavaScript Slideshow</Link>
      </div>
    )
  }

  render () {
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: this.renderContent()
        }}
        />
    )
  }
}
