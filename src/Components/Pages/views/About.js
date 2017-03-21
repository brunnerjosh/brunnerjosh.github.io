import React from 'react';
import md5 from 'js-md5';
import Constants from '../../../Constants';
import Icon from '../../Icon/Icon';
import Theme from '../../Theme';
import PageContent from '../PageContainer';

import '../../../Styles/About.css';

export default class About extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      socialLinks: [
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
    return this.state.socialLinks.map( (social, index) => {
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
    return (
      <div className='about__content'>
        {this.props.pageMarkdown()}
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
