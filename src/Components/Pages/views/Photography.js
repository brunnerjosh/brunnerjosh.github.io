import React from 'react';
import Flickr from '../../Shared/Flickr';
import PageContent from '../PageContainer';

export default class Photography extends React.Component {

  renderPageContent () {
    return (
      <div>
        <h1>Photography</h1>
        <p>Both being from Hawaii, my wife, Kristen, and I have a love for the outdoors and try to get away every weekend to explore the beautiful Pacific Northwest. We go on many hikes throughout the year that bring us to the lakes and waterfalls that abound here. I love to bring along my Nikon DSLR to capture each memory as it happens. I post my favorite photos on my Flickr account so that I can easily share them with our friends and families.</p>
        <p>Here are several of my most recent photos. <a href='https://www.flickr.com/photos/77226941@N04/' target='_blank'>Click here</a> to view the rest.</p>
        <Flickr
          {...this.props.flickr}
          fetchFlickrPhotos={this.props.fetchFlickrPhotos}
          />
      </div>
    )
  }

  render () {
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: this.renderPageContent()
        }}
        />
    )
  }
}
