import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import Peers from './Peers';
import RecordingTime from './RecordingTime';
import Icon from '../Icon/Icon';
import './Live.css';

export default class Live extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      joinById: false,
      fullscreen: false,
      desiredRoomId: "",
      viewedDisclaimer: false
    }
    this.onUnload = this.onUnload.bind(this);
    this.toggleJoinById = this.toggleJoinById.bind(this);
    this.handleRoomIdSubmit = this.handleRoomIdSubmit.bind(this);
    this.attemptToggleLocalStream = this.attemptToggleLocalStream.bind(this);
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
      this.setState({
        joinById: false,
        fullscreen: false
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.selfFeed) {
      if (this.props.webrtc.localStream !== nextProps.webrtc.localStream) {
        this.selfFeed.srcObject = nextProps.webrtc.localStream;
      }
    }
  }

  toggleJoinById () {
    this.setState({
      joinById: ! this.state.joinById
    })
  }

  handleRoomIdSubmit ( event ) {
    event.preventDefault();
    if (this.state.desiredRoomId.replace(/[^0-9]/g,"").length === 9) {
      this.props.initWebRTC(this.state.desiredRoomId);
    } else {
      alert('Please enter a valid nine-digit room ID. Example: 123-456-789 ');
    }
  }

  attemptToggleLocalStream () {
    // Make sure that we aren't currently in a chat
    if ( ! this.props.webrtc.socketId ) {
      // Closes socket, video, and audio streams
      this.props.closeWebRTC();
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
    const numOfConnections = Object.keys(this.props.webrtc.connections).length;
    const previewScreen = showPreview ? (
      <div className='live__preview' onClick={this.props.loadLocalStream}>
        Preview
      </div>
    ) : null;
    return (
      <div className='live__local-stream' onClick={this.attemptToggleLocalStream}>
        <span className='live__local-conn-count'>
          Connections: {numOfConnections}
          <br />
          { this.props.webrtc.socketId ? <RecordingTime /> : null }
        </span>
        {this.renderSelfVideoFeed()}
        {previewScreen}
      </div>
    )
  }

  renderRoomActionButton () {
    if ( ! this.state.viewedDisclaimer ) return;
    if (this.props.webrtc.socketId) {
      return (
        <div className='live__leave-room-btn'>
          <button onClick={this.onUnload} className='is-danger'>Leave Room</button>
          <p className='live__leave-room-alt'>{this.props.webrtc.roomId}</p>
        </div>
      )
    } else if ( ! this.state.joinById ) {
      return (
        <div className='live__enter-room-btn'>
          <button onClick={this.props.findOpenChatRoom}>Enter Room</button>
          <p className='live__enter-room-alt' onClick={this.toggleJoinById}>join by id</p>
        </div>
      )
    } else if (this.state.joinById) {
      return (
        <div className='live__enter-room-btn'>
          <form onSubmit={this.handleRoomIdSubmit}>
            <InputMask
              mask='999-999-999'
              placeholder='123-456-789'
              value={this.state.desiredRoomId}
              onChange={ event => this.setState({ desiredRoomId: event.target.value }) } />
          </form>
          <p className='live__enter-room-alt' onClick={this.toggleJoinById}>cancel</p>
        </div>
      )
    }
  }

  renderDisclaimer () {
    const classes = classNames('live__disclaimer', {
      'is-viewed': this.state.viewedDisclaimer
    })
    return (
      <div className={classes}>
        <h1>Live: A Video Chat Client</h1>
        <p>I was interested in learning and applying my knowledge of <a href='https://webrtc.org/' target='_blank'>WebRTC</a> and <a href='https://socket.io/' target='_blank'>Socket.IO</a> to build a video chat client. This project is very experimental and will likely have bugs and other issues. If you come across something and want to report it, please <a href='https://github.com/brunnerjosh/brunnerjosh.github.io/issues' target='_blank'>do so here.</a></p>
        <p>Note: Once you enter that chat room, you can share the room ID for others to join. Otherwise, everyone must join the chat within 2 minutes of the first person who joined the room.</p>
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
