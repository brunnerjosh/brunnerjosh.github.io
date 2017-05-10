import React from 'react';
import moment from 'moment';

export default class RecordingTime extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startTime: moment(),
      endTime: moment()
    }
  }

  componentDidMount () {
    this.timer = setInterval( () => {
      this.setState({
        endTime: moment()
      })
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  determineDisplayTime () {
    const { startTime, endTime } = this.state;
    let hours = endTime.diff(startTime, 'hours');
    hours = hours % 10 === hours ? `0${hours}` : hours;
    let mins = endTime.diff(startTime, 'minutes') % 60;
    mins = mins % 10 === mins ? `0${mins}` : mins;
    let secs = endTime.diff(startTime, 'seconds') % 60;
    secs = secs % 10 === secs ? `0${secs}` : secs;
    return `${hours}:${mins}:${secs}`;
  }

  render () {
    return <span>{this.determineDisplayTime().toString()}</span>
  }

}
