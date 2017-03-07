import React from 'react';
import PageContent from '../PageContainer';
import Constants from '../../../Constants';

import '../../../Styles/Photos.css';

export default class Hobbies extends React.Component {

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
      {this.props.pageMarkdown()}
      {this.renderFlickrImages()}
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
