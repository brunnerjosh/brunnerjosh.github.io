import React from 'react';
import PeerFeed from './PeerFeed';

export default class Peers extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedPeer: props.streams ? Object.keys(props.streams)[0] : null
    };
    this.handlePeerClick = this.handlePeerClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    const firstStream = Object.keys(nextProps.streams)[0];
    if ( this.state.selectedPeer !== firstStream ) {
      this.setState({
        selectedPeer: firstStream
      })
    }
  }

  handlePeerClick (socketId) {
    this.setState({
      selectedPeer: socketId
    })
  }

  renderPeers (friends) {
    const { streams } = this.props;

    const friendStreams = [];

    for (let key in streams) {
      if (key !== this.state.selectedPeer) {
        friendStreams.push(
          <PeerFeed
            key={key}
            stream={streams[key]}
            onClick={this.handlePeerClick.bind(null, key)}
            />
        )
      }
    }

    return friendStreams;
  }

  render () {
    const { streams } = this.props;
    const { selectedPeer } = this.state;
    return (
      <div>
        <div className='live__friend-selected'>
          <PeerFeed
            key={selectedPeer}
            stream={streams[selectedPeer]}
            onClick={this.handlePeerClick.bind(null, selectedPeer)}
            />
        </div>
        <div className='live__friend-tray'>
          {this.renderPeers()}
        </div>
      </div>
    )
  }
}
