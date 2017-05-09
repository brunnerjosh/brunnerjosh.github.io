import React from 'react';
import moment from 'moment';

export default class RecordingTime extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startTime: moment(props.startTime),
      endTime: moment()
    }
  }

  componentDidMount () {
    this.timer = setInterval( () => {
      console.log('interval ran');
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
    const hours = endTime.diff(startTime, 'hours');
    const mins = endTime.diff(startTime, 'minutes') % 60;
    const secs = endTime.diff(startTime, 'seconds') % 60;
    const colon = (secs % 2 === 0) ? ':' : ' ';
    return `${hours}:${mins}${colon}${secs}`;
  }

  render () {
    return <div>{this.determineDisplayTime().toString()}</div>
  }

}
