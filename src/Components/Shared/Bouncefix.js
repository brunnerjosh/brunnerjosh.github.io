// Taken from: https://github.com/bigdatr/react-bouncefix

import React from 'react';
import ReactDOM from 'react-dom';
import '../../Styles/Bouncefix.css';

const Bouncefix = React.createClass({
    displayName: 'Bouncefix',
    propTypes: {
        componentClass: React.PropTypes.node
    },
    getDefaultProps: function() {
        return {
            componentClass: 'div'
        };
    },
    scrollToEnd: function(el) {
        const curPos = el.scrollTop,
            height = el.offsetHeight,
            scroll = el.scrollHeight;

        // If at top, bump down 1px
        if(curPos <= 0) { el.scrollTop = 1; }

        // If at bottom, bump up 1px
        if(curPos + height >= scroll) {
            el.scrollTop = scroll - height - 1;
        }
    },
    onTouchStart: function(e) {
        const el = ReactDOM.findDOMNode(this);
        const isScrollable = el.scrollHeight > el.offsetHeight;

        // If scrollable, adjust
        if (isScrollable) {
            this._blockTouchMove = false;
            return this.scrollToEnd(el);
        }
        // Else block touchmove
        else {
            this._blockTouchMove = true;
        }

    },
    onTouchMove: function(e) {
        if (this._blockTouchMove) {
            e.preventDefault();
        }
    },
    onTouchEnd: function(e) {
        this._blockTouchMove = false;
    },
    render: function() {
      const props = Object.assign({}, this.props, {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchEnd
      });
      delete props.componentClass;

      return React.createElement(this.props.componentClass, props, this.props.children);
    }
});

module.exports = Bouncefix;
