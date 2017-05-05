import React from 'react';
import classNames from 'classnames';
import Peers from './Peers';
import Icon from '../Icon/Icon';
import './Live.css';

export default class Live extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      fullscreen: false,
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
    if ( ! this.state.viewedDisclaimer ) return;
    return (
      <div className='live__self-feed'>
        <video ref={c => this.selfFeed = c } autoPlay muted />
      </div>
    )
  }

  renderRequestLocalStream () {
    if ( ! this.state.viewedDisclaimer ) return;
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
    if ( ! this.state.viewedDisclaimer ) return;
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
        <h1>Live: A Video Chat Client</h1>
        <p>I was interested in learning and applying my knowledge of <a href='https://webrtc.org/' target='_blank'>WebRTC</a> and <a href='https://socket.io/' target='_blank'>Socket.IO</a> to build a video chat client. This project is very experimental and will likely have bugs and other issues. If you come across something and want to report it, please <a href='https://github.com/brunnerjosh/brunnerjosh.github.io/issues' target='_blank'>do so here.</a></p>
        <p>Note: In order to join the same chat room as your peers, everyone must join the chat within 2 minutes of the first person who joined the room.</p>
        <h4>Disclaimer</h4>
        <p>Before proceeding, please understand that this section of the website will only run properly in the Google Chrome web browser on a desktop computer.</p>
        <button onClick={() => this.setState({ viewedDisclaimer: true })}>I Understand</button>
      </div>
    );
  }

  renderEnterFullScreenIcons () {
    if ( ! this.state.viewedDisclaimer ) return;
    const icon = this.state.fullscreen ? 'screenNormal' : 'screenFull';
    return (
      <div
        className='live__fullscreen-btn'
        onClick={() => this.setState({ fullscreen: ! this.state.fullscreen })}>
        <Icon icon={icon} color={'#fafafa'}/>
      </div>
    )
  }

  render () {
    const { streams } = this.props.webrtc;
    const liveClasses = classNames('live', {
      'is-fullscreen': this.state.fullscreen
    });
    return (
      <div className={liveClasses}>
        <div className='live__container'>
          {this.renderEnterFullScreenIcons()}
          {this.renderRequestLocalStream()}
          {this.renderRoomActionButton()}
          <Peers streams={streams} />
          {this.renderDisclaimer()}
        </div>
      </div>
    )
  }
}
