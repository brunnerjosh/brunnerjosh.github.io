import React from 'react';
import md5 from 'js-md5';
import Constants from '../../Constants';
import Icon from '../Icon/Icon';
import Theme from '../Theme';
import PageContent from '../PageContent/PageContent';

import '../../Styles/About.css';

const paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default class About extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      socialLinkgs: [
        { icon: 'Twitter', link: Constants.twitter },
        { icon: 'AngelList', link: Constants.angellist },
        { icon: 'Medium', link: Constants.medium },
        { icon: 'LinkedIn', link: Constants.linkedin },
        { icon: 'GitHub', link: Constants.github }
      ]
    }
    this.setCurrentScreenWidth = this.setCurrentScreenWidth.bind(this);
  }

  componentDidMount () {
    window.addEventListener('resize', this.setCurrentScreenWidth);
}

  componentWillUnmount () {
    window.removeEventListener('resize', this.setCurrentScreenWidth);
  }

  setCurrentScreenWidth () {
    this.setState({ screenWidth: window.innerWidth });
  }

  generateGravatar (email, size) {
    const emailHash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${emailHash}?s=${size}`
  }

  renderIconLink () {
    return this.state.socialLinkgs.map( (social, index) => {
      return (
        <div
          key={index}
          className='about__connect-icon'
          onClick={ () => window.open(social.link, '_blank') } >
          <Icon color={Theme.primary.hex} icon={social.icon} />
        </div>
      )
    })
  }

  renderProfileConnect () {
    return (
      <div className='about__profile'>
        <div className='row'>
          <div className='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-4 col-md-offset-0 col-md-12'>
            <img
              className={'about__profile-img'}
              src={this.generateGravatar(Constants.email, 512)}
              alt={Constants.firstName + ' ' + Constants.lastName}
              />
          </div>
          <div className='col-xs-12 col-sm-offset-1 col-sm-5 col-md-offset-0 col-md-12'>
            <div className='about__connect'>
              {Constants.email}
              <div className='about__connect-icons'>
                {this.renderIconLink()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderPageContent () {
    const aboutContentStyles = this.state.screenWidth > 1024 ? {
      overflow: 'auto',
      height: `calc(100vh - ${Constants.headerHeight})`
    } : {};
    return (
      <div className='about__content' style={aboutContentStyles}>
        <h1>About</h1>
        <p>{paragraph1}</p>
        <p>{paragraph1}</p>
        <p>{paragraph1}</p>
        <p>{paragraph1}</p>
      </div>
    )
  }

  render () {
    return (
      <PageContent
        leftSide={{
          classes: 'col-xs-12 col-md-offset-0 col-md-4 col-lg-4',
          content: this.renderProfileConnect()
        }}
        rightSide={{
          classes: 'col-xs-12 col-md-offset-1 col-md-7 col-lg-7',
          content: this.renderPageContent()
        }}
        />
    )
  }
}
