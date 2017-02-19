import React from 'react';
import about from './About';
import professional from './Professional';
import education from './Education';
import hobbies from './Hobbies';
import thoughts from './Thoughts';
import personal from './Personal';

const pages = {
  about,
  professional,
  education,
  hobbies,
  thoughts,
  personal
}

export default class Pages extends React.Component {
  render () {
    const Page = pages[this.props.route.path.replace('/', '')];
    return <Page />
  }
}
