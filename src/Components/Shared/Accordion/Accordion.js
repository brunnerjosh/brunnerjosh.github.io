import React from 'react';
import AccordionItem from './AccordionItem';
import '../../../Styles/Accordion.css';

export default class Accordion extends React.Component {

  constructor (props) {
    super(props);
    const { items } = this.props;
    this.state = {
      activeKey: items && items[0].label,
      activeKeys: [ items && items[0].label ]
    }
    this.handleAccordionClick = this.handleAccordionClick.bind(this);
  }

  handleAccordionClick (item) {
    this.setState({
      activeKey: this.state.activeKey === item.label ? '' : item.label,
      activeKeys: this.state.activeKeys.includes(item.label)
                  ? this.state.activeKeys.filter(key => key !== item.label)
                  : this.state.activeKeys.concat(item.label)
    });
  }

  renderAccordionItems () {
    const { activeKey } = this.state;
    const { items, collapse } = this.props;
    return items && items.map( (item, index) => {
      const isActive = collapse ? activeKey === item.label : this.state.activeKeys.includes(item.label);
      return <AccordionItem
                key={index}
                isActive={isActive}
                onClick={this.handleAccordionClick.bind(null, item)}
                {...item} />
    })
  }

  render () {
    return (
      <div ref={(c) => {this._accordion = c}} className='accordion'>
        <div className='accordion__container'>
          {this.renderAccordionItems()}
        </div>
      </div>
    )
  }
}

Accordion.defaultProps = {
  collapse: true
}
