import React from 'react';
import './Live.css';

const friends = [
  { name: 'Stacy', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5092553/thumb/1.jpg?i10c=img.resize(height:160)' },
  { name: 'Jim', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5235182/thumb/1.jpg?i10c=img.resize(height:160)' },
  { name: 'Tommy', feed: 'https://cdn.shutterstock.com/shutterstock/videos/5092514/thumb/1.jpg' }
]

export default class Live extends React.Component {

  componentDidMount () {
    this.props.initWebRTC();
  }

  renderFriends (friends) {
    if (friends) {
      return friends.map( (person, index) => {
        return (
          <div className='live__friend-feed' key={index}>
            <img style={{ height: '100%', width: '100%'}} src={person.feed} alt={person.name}/>
          </div>
        )
      })
    }
  }

  renderSelfVideoFeed () {
    return (
      <div className='live__self-feed'>
        <img style={{ height: '100%', width: '100%'}} src="http://footage.framepool.com/shotimg/qf/272322714-video-chat-agency-style-online.jpg" alt="self-feed" />
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
