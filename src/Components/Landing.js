import React from 'react';
import Grid from './Grid/Grid';

export default class Landing extends React.Component {
  render () {
    const cells = [
      { label: 'About (USE ICONS)', onClick: () => { console.log('I was clicked!') } },
      { label: 'Professional', onClick: () => { console.log('I was clicked!') } },
      { label: 'Education', onClick: () => { console.log('I was clicked!') } },
      { label: 'Personal', onClick: () => { console.log('I was clicked!') } },
      { label: 'Thoughts', onClick: () => { console.log('I was clicked!') } },
      { label: 'Hobbies', onClick: () => { console.log('I was clicked!') } },
      { label: 'Mail', onClick: () => { console.log('I was clicked!') } },
      { label: 'LinkedIn', onClick: () => { console.log('I was clicked!') } },
      { label: 'GitHub', onClick: () => { console.log('I was clicked!') } }
    ]

    return (
      <Grid items={cells} />
    )
  }
}
