import React from 'react';
import Constants from '../../Constants';
import Loading from '../Shared/Loading';
import '../../Styles/Photos.css';

export default class Flickr extends React.Component {

  componentWillMount () {
    if (this.props && !this.props.photos) {
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
    const images = this.props.photos && this.props.photos.photo.map( (photo, index) => {
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

  render () {
    return this.props.isLoading ? <Loading /> : this.renderFlickrImages()
  }
}
