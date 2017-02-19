import React from 'react';
import professional from './Professional';

const pages = {
  professional
}

export default class Pages extends React.Component {
  render () {
    const Page = pages[this.props.route.path.replace('/', '')];
    return <Page />
  }
}
