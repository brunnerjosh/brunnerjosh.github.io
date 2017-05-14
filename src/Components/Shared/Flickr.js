import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Constants from '../../Constants';
import Loading from '../Shared/Loading';
import '../../Styles/Photos.css';

export default class Flickr extends React.Component {

  constructor (props) {
    super(props);
    this.checkIfUserIsNearBottom = this.checkIfUserIsNearBottom.bind(this);
  }

  componentWillMount () {
    if (this.props && !this.props.photos) {
      this.props.fetchFlickrPhotos({
        user_id: Constants.flickrHandle,
        per_page: this.props.perPage,
        page: 1
      });
    }
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
    if ( (scrollTop + windowHeight > documentHeight - (windowHeight / 2) )  && ! this.props.isLoading) {
      this.props.fetchFlickrPhotos({
        user_id: Constants.flickrHandle,
        per_page: this.props.photos.perpage,
        page: this.props.photos.page + 1
      });
    }
  }

  determineImageSize () {
    // Flickr photo size mapping:
    // https://www.flickr.com/services/api/misc.urls.html
    const { innerWidth } = window;
    return innerWidth <= 640 ? 'z' : (innerWidth <= 800 ? 'c' : 'b');
  }

  renderFlickrImages () {
    const images = this.props.photos.photo.map( (photo, index) => {
      return (
        <div key={index} className='photos__photo'>
          <img
            alt={photo.title}
            src={ `https://farm${photo.farm}.staticflickr.com/`
                + `${photo.server}/${photo.id}_${photo.secret}`
                + `_${this.determineImageSize()}.jpg` }
            />
          </div>
        )
    })
    return (
      <ReactCSSTransitionGroup
        component='div'
        className='photos'
        transitionName='photos__animation'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
      {images}
      </ReactCSSTransitionGroup>
    )
  }

  render () {
    return !this.props.photos ? <Loading /> : this.renderFlickrImages()
  }
}

Flickr.defaultProps = {
  perPage: 5
}
