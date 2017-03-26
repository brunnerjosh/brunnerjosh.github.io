import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      timeout: props.timeout
    };
    this.timer = this.timer.bind(this);
  }

  componentDidMount () {
    this.setState({
      intervalId: setInterval(this.timer, 1000)
    });
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.timeout === 0) {
      this.props.router.push('/');
      return false;
    }
    return true;
  }

  timer () {
    this.setState({ timeout: this.state.timeout - 1 });
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '6em', lineHeight: '2em'}}>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <hr />
        <p>Sorry, but the page you are looking for does not exist.</p>
        <p><em>Redirecting in {this.state.timeout}</em></p>
        <Link to='/'>Take me home</Link>
      </div>
    )
  }
}

NotFound.defaultProps = {
  timeout: 5
}
