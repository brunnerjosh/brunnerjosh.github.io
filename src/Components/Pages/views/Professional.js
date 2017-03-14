import React from 'react';
import Icon from '../../Icon/Icon';
import PageContent from '../PageContainer';

const logos = [
  { label: 'Angular', logo: 'Angular' , link: 'https://angular.io/' },
  { label: 'React', logo: 'ReactIcon' , link: 'https://facebook.github.io/react/' },
  { label: 'Redux', logo: 'Redux' , link: 'http://redux.js.org/' },
  { label: 'WebRTC', logo: 'WebRTC' , link: 'https://webrtc.org/' },
  { label: 'XMPP', logo: 'XMPP' , link: 'https://xmpp.org/' },
  { label: 'Unity', logo: 'Unity' , link: 'https://unity3d.com/' },
  { label: 'C#', logo: 'CSharp' , link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
  { label: 'jQuery', logo: 'jQuery' , link: 'https://jquery.com/' },
  { label: 'JavaScript', logo: 'JavaScript' , link: 'https://www.javascript.com/' },
  { label: 'Java', logo: 'Java' , link: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
  { label: 'Git', logo: 'Git' , link: 'https://git-scm.com/' },
  { label: 'Perforce', logo: 'Perforce' , link: 'https://www.perforce.com/' },
  { label: 'C++', logo: 'CPlusPlus' , link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
  { label: 'HTML', logo: 'HTML' , link: 'https://en.wikipedia.org/wiki/HTML' },
  { label: 'CSS', logo: 'CSS' , link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets' }
];

export default class Professional extends React.Component {

  renderLogoList () {
    const logoListStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    };

    const logoItemStyles = {
      flex: 1,
      cursor: 'pointer',
      display: 'flex',
      padding: '2em',
      margin: '1em'
    }

    const logoItems = logos.map( (logo, index) => {
      return (
        <div key={index} style={logoItemStyles} title={logo.label} onClick={ () => window.open(logo.link, '_blank')}>
          <Icon icon={logo.logo} />
        </div>
      )
    })

    return (
      <div style={logoListStyles}>{logoItems}</div>
    )
  }

  renderContent () {
    return (
      <div>
        {this.props.pageMarkdown()}
        {this.renderLogoList()}
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
