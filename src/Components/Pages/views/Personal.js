import React from 'react';
import { Link } from 'react-router';
import PageContent from '../PageContainer';

export default class Personal extends React.Component {

  renderContent () {
    return (
      <div>
        <h1>Personal Projects</h1>
        <p>When I'm not hiking in the mountains, I'm probably behind a computer screen learning new technologies or practicing something I may need to learn for work. Here are a few of the projects that have actually seen the light of day.</p>
        <div className='content__section-spacer'>April, 2015</div>
        <Link to='/articles/js_slideshow'><h2>Vanilla JavaScript Slideshow</h2></Link>
        <div className='content__section-spacer'>Coming soon</div>
        <h2 className='+disabled'>Video Chat</h2>
        <h2 className='+disabled'>Dashboard</h2>
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
