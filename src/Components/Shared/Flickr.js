import React from 'react';
import Constants from '../../Constants';
import Loading from '../Shared/Loading';
import '../../Styles/Photos.css';

export default class Flickr extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      page: 1,

    }
    this.checkIfUserIsNearBottom = this.checkIfUserIsNearBottom.bind(this);
  }

  componentWillMount () {
    if (this.props && !this.props.photos) {
      this.props.fetchFlickrPhotos({
        user_id: Constants.flickrHandle,
        per_page: this.props.perPage,
        page: this.state.page
      });
    }
  }

  componentWillReceiveProps( nextProps) {
    console.log('nextProps');
  }

  componentDidMount () {
    window.addEventListener('scroll', this.checkIfUserIsNearBottom);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.checkIfUserIsNearBottom);
  }

  getDocumentHeight () {
    // From: http://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    const body = document.body;
    const html = document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  checkIfUserIsNearBottom () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = this.getDocumentHeight();
    if ( (scrollTop + windowHeight > documentHeight - (windowHeight / 4) )  && ! this.props.isLoading) {
      console.log('nearing bottom!', scrollTop, windowHeight, documentHeight);

      this.setState({
        page: this.state.page + 1
      })
      this.props.fetchFlickrPhotos({
        user_id: Constants.flickrHandle,
        per_page: this.props.perPage,
        page: this.state.page
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

Flickr.defaultProps = {
  perPage: 20
}
