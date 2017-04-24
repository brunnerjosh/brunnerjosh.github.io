import React from 'react';

export default class PeerFeed extends React.Component {

  componentDidMount () {
    if (this.stream) {
      this.stream.srcObject = this.props.stream;
    }
  }

  render () {
    return (
      <div className='live__friend-feed' onClick={this.props.onClick}>
        <video
          autoPlay
          ref={c => this.stream = c}
          style={{ height: '100%', width: '100%'}}
          />
      </div>
    )
  }
}
