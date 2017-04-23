import React from 'react';
import PeerFeed from './PeerFeed';
import './Live.css';

const friends = [
  { name: 'Stacy', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5092553/thumb/1.jpg?i10c=img.resize(height:160)' },
  { name: 'Jim', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5235182/thumb/1.jpg?i10c=img.resize(height:160)' },
  { name: 'Tommy', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5092514/thumb/1.jpg' }
]


export default class Live extends React.Component {

  componentDidMount () {
    this.props.initWebRTC();
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount() {
    this.props.closeWebRTC();
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onUnload(event) {
    this.props.closeWebRTC();
  }

  renderFriends (friends) {
    const { streams } = this.props.webrtc;

    const friendStreams = [];

    for (let key in streams) {
      friendStreams.push(
        <PeerFeed key={key} stream={streams[key]}/>
      )
    }

    return friendStreams;
    // if (friends) {
    //   return friends.map( (person, index) => {
    //     return (
    //       <PeerFeed key={index} stream=/>
    //     )
    //   })
    // }
  }

  renderSelfVideoFeed () {
    if (this.selfFeed) {
      this.selfFeed.srcObject = this.props.webrtc.localStream;
      this.selfFeed.muted = true;
    }
    return (
      <div className='live__self-feed'>
        <video
          autoPlay
          ref={c => this.selfFeed = c }
          style={{ height: '100%', width: '100%'}} />
      </div>
    )
  }

  render () {
    return (
      <div className='live'>
        <div className='live__container'>
          {this.renderSelfVideoFeed()}
          <div className='live__friend-tray'>
            {this.renderFriends(friends)}
          </div>
        </div>
      </div>
    )
  }
}
