import React from 'react';
import AccordionItem from './AccordionItem';
import '../../../Styles/Accordion.css';

export default class Accordion extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      activeKey: this.props.items[0].label
    }
    this.handleAccordionClick = this.handleAccordionClick.bind(this);
  }

  handleAccordionClick (item) {
    this.setState({
      activeKey: this.state.activeKey === item.label ? '' : item.label
    })
  }

  renderAccordionItems () {
    const { activeKey } = this.state;
    return this.props.items.map( (item, index) => {
      const isActive = activeKey === item.label;
      return <AccordionItem
                key={index}
                isActive={isActive}
                onClick={this.handleAccordionClick.bind(null, item)}
                {...item}/>
    })
  }

  render () {
    return (
      <div className='accordion'>
        <div className='accordion__container'>
          {this.renderAccordionItems()}
        </div>
      </div>
    )
  }
}
