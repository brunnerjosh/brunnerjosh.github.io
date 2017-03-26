import React from 'react';
import Icon from '../../Icon/Icon';
import PageContent from '../PageContainer';
import Accordion from '../../Shared/Accordion/Accordion';

const logos = [
  { label: 'React', logo: 'ReactIcon' , link: 'https://facebook.github.io/react/' },
  { label: 'Redux', logo: 'Redux' , link: 'http://redux.js.org/' },
  { label: 'Unity', logo: 'Unity' , link: 'https://unity3d.com/' },
  { label: 'Angular', logo: 'Angular' , link: 'https://angular.io/' },
  { label: 'jQuery', logo: 'jQuery' , link: 'https://jquery.com/' },
  { label: 'JavaScript', logo: 'JavaScript' , link: 'https://www.javascript.com/' },
  { label: 'Backbone', logo: 'Backbone', link: 'http://backbonejs.org/' },
  { label: 'Jest', logo: 'Jest', link: 'https://facebook.github.io/jest/' },
  { label: 'Mocha', logo: 'Mocha', link: 'http://mochajs.org/' },
  { label: 'NPM', logo: 'NPM', link: 'https://www.npmjs.com/' },
  { label: 'Node', logo: 'Node', link: 'https://nodejs.org/' },
  { label: 'HTML', logo: 'HTML' , link: 'https://en.wikipedia.org/wiki/HTML' },
  { label: 'CSS', logo: 'CSS' , link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets' },
  { label: 'WebRTC', logo: 'WebRTC' , link: 'https://webrtc.org/' },
  { label: 'XMPP', logo: 'XMPP' , link: 'https://xmpp.org/' },
  { label: 'C#', logo: 'CSharp' , link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
  { label: 'Java', logo: 'Java' , link: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
  { label: 'C++', logo: 'CPlusPlus' , link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
  { label: 'Git', logo: 'Git' , link: 'https://git-scm.com/' },
  { label: 'Perforce', logo: 'Perforce' , link: 'https://www.perforce.com/' },
  { label: 'Arduino', logo: 'Arduino', link: 'https://www.arduino.cc/' }
];

const projects = [
  {
    label: 'Project 5',
    content: [
      "By far, this is the longest engagement I've been on professionally with Helpful Human. This project has taught me many different lessons and placed me outside of my comfort zone more times than I can count. That being said, I wouldn't trade those experiences for anything.",
      "I've been given the opportunity to build real-time interfaces and libraries for completely new devices while working with cutting-edge technologies. This is a large-scale project that is distributed amongst 30+ other teams, so collaboration has been a key focus.",
      "As the project has progressed, the product has gone through several design refactors and one major language change to allow for an end product that's unrivaled by its competitors."
    ],
    tldr: 'Worked on a large-scale project that\'s revolutionizing the hospitality industry. Implemented many designs on non-conventional devices using cutting-edge technologies. Worked closely with teams spread across the US for a truly diverse development experience.'
  },
  {
    label: 'Project 4',
    content: [
      "I was brought onto this project to save it from imminent failure from a previous developer that exaggerated their technical ability. Due to the fast-approaching deadline this project had, I had to get in and understand the problem space quickly.",
      "It wasn't too long until I realized the gravity of work remaining. Nevertheless, I was able successfully launch this mobile app (built with <a href='https://cordova.apache.org/' target='_blank'>Cordova</a>) on both the iOS & Android app stores."
    ],
    tldr: "Saved a failing project and successfully launched a <a href='https://cordova.apache.org/' target='_blank'>Cordova</a> app on the iOS and Android app stores."
  },
  {
    label: 'Project 3',
    content: [
      "For this project, I worked closely with a design team to implement a living style guide for a medical services company in Oregon. This style guide included web UI components like buttons, forms, input fields, boxes, panels, etc.",
      "Once the style guide was getting updated less frequently, we began to build templates for various pages to later be implemented in <a href='http://backbonejs.org/' target='_blank'>Backbone</a> with a .Net backend. These templates needed to be responsive as well as run on browsers down to IE 10, which furthered my experience with browser compatibility through polyfills and helped me build creative solutions to various bugs that would come up.",
      "This project taught me the importance of creating components in an <a href='http://bradfrost.com/blog/post/atomic-web-design/' target='_blank'>Atomic</a> fashion so as to not allow for unintended side effects. I also learned through this project the importance of communication to all stakeholders. This was done through quick daily standups as well as weekly retrospectives and planning sessions."
    ],
    tldr: "Built UI templates through the creation of a living style guide. I learned the importance of building in an <a href='http://bradfrost.com/blog/post/atomic-web-design/' target='_blank'>Atomic</a> fashion. My biggest takeaway from this project was how good management can foster an environment of productive creativity."
  },
  {
    label: 'Project 2',
    content: [
      "Helpful Human's longest standing product development effort has seen multiple refactors and changes in its technology stack. I've been working on this project off and on since 2014. More recently, we've been making a larger push towards the finish line of releasing the product to the market.",
      "My involvement on this project has included building its UI in <a href='https://angularjs.org/' target='_blank'>Angular</a> and then in <a href='https://facebook.github.io/react/' target='_blank'>React</a>. I've also been a part of developing an abstraction layer to its backend infrastructure, which is currently built on <a href='https://firebase.google.com/' target='_blank'>Firebase</a>. The long term goal with this abstraction layer is to switch out Firebase for a custom tailored solution once the MVC has proved its feasibility."
    ],
    tldr: "I played a significant role in building and refactoring a long standing Helpful Human product (in <a href='https://angularjs.org/' target='_blank'>Angular</a> and <a href='https://facebook.github.io/react/' target='_blank'>React</a>). This included developing an abstraction layer for its <a href='https://firebase.google.com/' target='_blank'>Firebase</a> backend allowing us to one day replace it with a custom tailored solution."
  },
  {
    label: 'Project 1',
    content: [
      "This wasn't my first time working with web technologies, however, it was the first time I began using a JavaScript framework (Angular) to create MVC-based user interfaces. It was also in this project that I developed a deep understanding and practice of CSS through the Stylus preprocessor.",
      "Since this project was to be run primarily on older web browsers (IE 8), yet still respond to modern devices (phones, tablets, desktop, touch screens, etc.), it provided the perfect opportunity for me to learn responsive web development while accommodating older technologies.",
      "Working closely with another with another developer that acted as a mentor to me, I learned the ropes. We were responsible for implementing pixel-perfect designs for the web and print versions of the application."
    ],
    tldr: "I used Angular to build an UI for a well-known medical brand. I learned about browser compatibility, CSS, and the importance of implementing pixel perfect designs."
  }
]

export default class Professional extends React.Component {

  formatProjects (items) {
    return items.map( (item, index) => {
      return {
        label: <h4>{item.label}</h4>,
        content: (
          <div>
          {item.content.map( (p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p }} /> )}
          <em><strong>TL;DR</strong><p dangerouslySetInnerHTML={{__html: item.tldr }} /></em>
          </div>
        )
      }
    })
  }

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
        <h1>Professional</h1>
        <p>Among the many projects that I've worked on at Helpful Human, there are a several that stand out as opportunities where I was able to learn and improve the way I build products.</p>
        <h2>Management</h2>
        <p>While each project deserves its own form of management, the scenarios where I felt the project's chance of success was at its best was when there were daily standups, weekly retrospectives, and proper planning in place to always keep a backlog full.</p>
        <p>I am comfortable with the generic Agile process, but I prefer to craft a project's management to the specific needs of the team. In doing so, I feel that team members are able to express the varying ways they think and problem solve.</p>
        <p>From my experience, this will often help the leaders of the project to gain a deeper understanding of the problem space which helps them to make more informed decisions as the project progresses.</p>
        <h2>Projects</h2>
        <p>Here is a high level overview of several projects I've worked on at Helpful Human (sorted by most recent).</p>
        <Accordion collapse={false} items={this.formatProjects(projects)} />
        <h2>Technologies</h2>
        <p>Some of the technologies I work with currently or have worked with in the past include:</p>
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
