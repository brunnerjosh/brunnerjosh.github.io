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
      desiredRoomId: '',
      viewedDisclaimer: false
    }
    this.onUnload = this.onUnload.bind(this);
    this.toggleJoinById = this.toggleJoinById.bind(this);
    this.handleRoomIdSubmit = this.handleRoomIdSubmit.bind(this);
    this.updateDesiredRoomId = this.updateDesiredRoomId.bind(this);
    this.markDisclaimerAsViewed = this.markDisclaimerAsViewed.bind(this);
    this.attemptToggleLocalStream = this.attemptToggleLocalStream.bind(this);
  }

  componentWillMount () {
    this.props.checkForWebRTCSupport();
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
        desiredRoomId: '',
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

  updateDesiredRoomId (event) {
    this.setState({ desiredRoomId: event.target.value });
    if (event.target.value.replace(/[^0-9]/g,"").length === 9) {
      this.props.initWebRTC(event.target.value);
    }
  }

  handleRoomIdSubmit (event) {
    event.preventDefault();
    if (this.state.desiredRoomId.replace(/[^0-9]/g,"").length === 9) {
      setTimeout(() => {
        this.props.initWebRTC(this.state.desiredRoomId);
      }, 1000);
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

  markDisclaimerAsViewed () {
    this.setState({
      viewedDisclaimer: true
    });
  }

  renderSelfVideoFeed () {
    if ( ! this.state.viewedDisclaimer ) return;
    const numOfConnections = Object.keys(this.props.webrtc.connections).length;
    return (
      <div className='live__self-feed'>
        <span className='live__local-conn-count'>
          Connections: {numOfConnections}
          <br />
          { this.props.webrtc.socketId ? <RecordingTime /> : null }
        </span>
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
      <div className='live__local-stream' onClick={this.attemptToggleLocalStream}>
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
              onChange={this.updateDesiredRoomId} />
          </form>
          <p className='live__enter-room-alt' onClick={this.toggleJoinById}>cancel</p>
        </div>
      )
    }
  }

  renderDisclaimer () {
    const cta = this.props.webrtc.isSupported ? (
      <div>
        <p>Note: Once you enter that chat room, you can share the room ID for others to join. Otherwise, everyone must join the chat within 2 minutes of the first person who joined the room.</p>
        <button onClick={this.markDisclaimerAsViewed}>Let me in</button>
      </div>
    ) : (
      <div>
      <div className='row'>
        <div className='col-xs-1'>
          <Icon icon='Alert' color='red'/>
        </div>
        <div className='col-xs-11'>
          <p>Download <a href='https://www.google.com/chrome/browser/desktop/' target='_blank'>Chrome</a> in order to test out this video chat client as it was designed to work. If you think your browser can handle WebRTC and Socket.IO anyway, <a onClick={this.markDisclaimerAsViewed}>click here to proceed</a>.</p>
        </div>
      </div>
      </div>
    );
    return (
      <div className='row'>
        <div className='col-xs-offset-1 col-xs-10'>
          <h1>Live: A Video Chat Client</h1>
          <p>I was interested in learning and applying my knowledge of <a href='https://webrtc.org/' target='_blank'>WebRTC</a> and <a href='https://socket.io/' target='_blank'>Socket.IO</a> to build a video chat client. This project is very experimental and will likely have bugs and other issues. If you come across something and want to report it, please <a href='https://github.com/brunnerjosh/brunnerjosh.github.io/issues' target='_blank'>do so here.</a></p>
          {cta}
        </div>
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
    if (! this.state.viewedDisclaimer ) {
      return this.renderDisclaimer();
    } else {
      return (
        <div className={liveClasses}>
          <div className='live__container'>
            {this.renderEnterFullScreenIcons()}
            {this.renderRoomActionButton()}
            {this.renderRequestLocalStream()}
            <Peers streams={streams} />
          </div>
        </div>
      )
    }
  }
}
