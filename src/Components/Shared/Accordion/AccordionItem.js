import React from 'react';
import Theme from '../../Theme';

export default class AccordionItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      staticHeight: 0,
      contentHeight: null
    }
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({
        staticHeight: this._content.offsetHeight,
        contentHeight: this.props.isActive ? this._content.offsetHeight : 0
      });
    }, 1);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isActive !== nextProps.isActive) {
      this.setState({
        contentHeight: nextProps.isActive ? this.state.staticHeight : 0
      })
    }
  }

  renderContent () {
    const contentStyles = {
      height: this.state.contentHeight,
      background: `rgba(${Theme.quaternary.r}, ${Theme.quaternary.g}, ${Theme.quaternary.b}, .2)`
    };
    return (
      <div
        ref={(c) => this._content = c}
        style={contentStyles}
        className='accordion__item-content'>
        <div className='accordion__item-content-container'>
          {this.props.content}
        </div>
      </div>
    );
  }

  render () {
    const itemLabelStyles = {
      background: `rgba(${Theme.quaternary.r}, ${Theme.quaternary.g}, ${Theme.quaternary.b}, .4)`
    };
    return (
      <div style={{ borderColor: Theme.quaternary.hex }} className={'accordion__item'}>
        <div style={itemLabelStyles} className='accordion__item-label' onClick={this.props.onClick}>
          {this.props.label}
        </div>
        {this.renderContent()}
      </div>
    )
  }
}
