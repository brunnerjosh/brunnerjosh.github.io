import React from 'react';
import classNames from 'classnames';
import Peers from './Peers';
import PageContainer from '../Pages/PageContainer';
import './Live.css';

export default class Live extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      viewedDisclaimer: false
    }
    this.onUnload = this.onUnload.bind(this);
  }

  componentDidMount () {
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount () {
    this.onUnload();
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onUnload () {
    if (this.props.webrtc.socketId) {
      this.props.closeWebRTC();
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.selfFeed) {
      if (this.props.webrtc.localStream !== nextProps.webrtc.localStream) {
        this.selfFeed.srcObject = nextProps.webrtc.localStream;
      }
    }
  }

  renderSelfVideoFeed () {
    return (
      <div className='live__self-feed'>
        <video ref={c => this.selfFeed = c } autoPlay muted />
      </div>
    )
  }

  renderRequestLocalStream () {
    const showPreview = ! this.selfFeed || (this.selfFeed && ! this.selfFeed.srcObject);
    const previewScreen = showPreview ? (
      <div className='live__preview' onClick={this.props.loadLocalStream}>
        Preview
      </div>
    ) : null;
    return (
      <div className='live__local-stream'>
        {this.renderSelfVideoFeed()}
        {previewScreen}
      </div>
    )
  }

  renderRoomActionButton () {
    return this.props.webrtc.socketId ? (
      <button onClick={this.onUnload} className='live__leave-room-btn is-danger'>Leave Room</button>
    ) : (
      <button onClick={this.props.findOpenChatRoom} className='live__enter-room-btn'>Enter Room</button>
    );
  }

  renderDisclaimer () {
    const classes = classNames('live__disclaimer', {
      'is-viewed': this.state.viewedDisclaimer
    })
    return (
      <div className={classes}>
        <h1>Video Chat</h1>
        <p>I have embarked on a journey to bring video chat to my own website.</p>
        <p>The goal with this project was to be able to have a place on my website that I could enter a room and have a video chat with anyone else in the room - with close to zero setup required!</p>
        <p>Keep in mind that this is an experiment and <b>will not work</b> on all browsers and devices. It uses <a href='https://webrtc.org/' target='_blank'>WebRTC</a> as the technology to facilitate the video call and <a href='https://socket.io/' target='_blank'>Socket.IO</a> for the signaling server.</p>
        <button onClick={() => this.setState({ viewedDisclaimer: true })}>I Understand</button>
      </div>
    );
  }

  render () {
    const { streams } = this.props.webrtc;
    return (
      <div className='live'>
        <div className='live__container'>
          {this.renderRequestLocalStream()}
          {this.renderRoomActionButton()}
          <Peers streams={streams} />
          {this.renderDisclaimer()}
        </div>
      </div>
    )
  }
}
