import React from 'react';
import PageContent from '../PageContainer';
import Card from '../../Shared/Card';
import introWebAssembly from '../../../Assets/intro-webassembly.png';

export default class Personal extends React.Component {

  renderContent () {
    return (
      <div>
        <h1>Personal Projects</h1>
        <p>When I'm not hiking in the mountains, I'm probably behind a computer screen learning new technologies or practicing something I may need to learn for work. Here are a few of the projects that have actually seen the light of day.</p>
        <div className='content__section-spacer'>March, 2017</div>
        <Card
          header={'Introduction to WebAssembly'}
          imgUrl={introWebAssembly}
          onClick={ () => window.location = 'https://youtu.be/EJWcBpWGC9g' }
          description={'I gave a presentation at work (helpfulhuman.com) on an introduction to WebAssembly as it pertains to modern web development...'}/>
        <div className='content__section-spacer'>April, 2015</div>
        <Card
          header={'JavaScript Slideshow'}
          onClick={this.props.router.push.bind(null, '/articles/js_slideshow')}
          description={'After reading an article written by Chris Zacharias, a former YouTube employee, I was inspired to begin practicing various JavaScript problems. The goal I have since set for myself is...'}/>
        <div className='content__section-spacer'>Coming soon</div>
        <Card
          header={'Video Chat'}
          onClick={null}
          disabled={true}
          description={'Coming soon...'}/>
        <Card
          header={'Dashboard'}
          onClick={null}
          disabled={true}
          description={'Coming soon...'}/>
        <Card
          header={'Arduino Projects'}
          onClick={null}
          disabled={true}
          description={'Coming soon...'}/>
        <Card
          header={'Alexa Skills'}
          onClick={null}
          disabled={true}
          description={'Coming soon...'}/>
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
