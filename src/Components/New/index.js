import React from 'react'
import './New.css'

export default class New extends React.Component {
  render () {
    return (
      <div className='new__container'>
        <div className='new__inner-container'>
          <div className='new__inner-nav'>
            <div className='new__inner-nav-item'>Item 1</div>
            <div className='new__inner-nav-item'>Item 2</div>
            <div className='new__inner-nav-item'>Item 3</div>
            <div className='new__inner-nav-item'>Item 4</div>
          </div>
          <div className='new__content'>
            <h1>Content</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    )
  }
}
