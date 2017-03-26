import React from 'react';
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
              src={`${process.env.PUBLIC_URL}/profile-compressed.png`}
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
        <h1>About</h1>
        <p>I am a Software Engineer at <a href='http://helpfulhuman.com' target='_blank'>Helpful Human</a>, a Seattle-based company that builds digital solutions for companies doing awesome things. As such, I enjoy my responsibilities of developing web interfaces and keeping up with the latest in web technologies in order to be able to provide insight and solutions for the various problems that arise. Our most interesting project thus far has been designing and building out an interface for large touchscreen experiences. I have enjoyed the challenge of thinking about how the change in a user’s interactions affects the entire experience with the large-scale display.</p>
        <p>Before joining Helpful Human, I worked at <a href='http://apple.com' target='_blank'>Apple</a> as a sales Specialist where I had the opportunity to experience a truly customer focused company. Prior to that, I worked as an IT Technician at the University of Washington where I fine-tuned my technical support skills.</p>
        <p>I absolutely enjoy the work I do and love the challenges that I get to solve. From a project’s inception to handing over the keys, I appreciate every step in the process and work hard to make sure that our clients feel supported and empowered along the way. One of my favorite parts of this process is seeing how the iterations of a product shape and mold the end result. I admire watching how these iterations come about by creative and skilled minds collaborating to ever improve upon an original idea, and I am honored when I can be a part of that kind of team.</p>
        <p>If you’d like to connect, please feel free to contact me.</p>
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
