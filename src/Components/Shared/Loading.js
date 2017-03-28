import React from 'react';
import '../../Styles/Loading.css';

export default class Loading extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      opacity: 0
    }
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({
        opacity: 1
      })
    }, 1)
  }

  render () {
    return (
      <div className='loading' style={{ opacity: this.state.opacity }}>
          <div style={{
            height: (this.props.size / 1) + 'em',
            width: this.props.size + 'em',
            color: this.props.color
          }} className='loading__spinner' />
      </div>
    )
  }
}

Loading.defaultProps = {
  color: 'rgba(0, 0, 0, .5)',
  size: 5
}
