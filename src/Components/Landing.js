import React from 'react';
import Grid from './Grid/Grid';

export default class Landing extends React.Component {
  render () {
    const cells = [
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } },
      { label: 'Click me!', onClick: () => { console.log('I was clicked!') } }
    ]

    return (
      <Grid items={cells} />
    )
  }
}
