import React from 'react';
import PageContent from '../PageContainer';
import Constants from '../../../Constants';
import Loading from '../../Shared/Loading';

import '../../../Styles/Photos.css';

export default class Photography extends React.Component {

  componentWillMount () {
    if (this.props.flickr && !this.props.flickr.photos) {
      this.props.fetchFlickrPhotos({
        user_id: Constants.flickrHandle,
        per_page: 20
      });
    }
  }

  determineImageSize () {
    const { innerWidth } = window;
    // Flickr photo size mapping:
    // https://www.flickr.com/services/api/misc.urls.html
    if (innerWidth <= 960) {
      return 'z';
    } else if (innerWidth > 960 && innerWidth <= 1280) {
      return 'c';
    } else if (innerWidth > 1280 && innerWidth <= 1920) {
      return 'b'
    } else {
      return 'h'
    }
  }

  renderFlickrImages () {
    const images = this.props.flickr.photos && this.props.flickr.photos.photo.map( (photo, index) => {
      return (
        <img
          key={index}
          alt={photo.title}
          src={ `https://farm${photo.farm}.staticflickr.com/`
              + `${photo.server}/${photo.id}_${photo.secret}`
              + `_${this.determineImageSize()}.jpg` }
          />
        )
    })
    return <div className='photos'>{images}</div>
  }

  renderPageContent () {
    return (
      <div>
      <h1>Photography</h1>
      <p>Both being from Hawaii, my wife, Kristen, and I have a love for the outdoors and try to get away every weekend to explore the beautiful Pacific Northwest. We go on many hikes throughout the year that bring us to the lakes and waterfalls that abound here. I love to bring along my Nikon DSLR to capture each memory as it happens. I post my favorite photos on my Flickr account so that I can easily share them with our friends and families.</p>
      <p>Here are several of my most recent photos. <a href='https://www.flickr.com/photos/77226941@N04/' target='_blank'>Click here</a> to view the rest.</p>
      {this.props.flickr.isLoading ? <Loading /> : this.renderFlickrImages()}
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
