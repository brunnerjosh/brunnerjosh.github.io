import React from 'react';

import '../Styles/Typography.css';

export default class Typography extends React.Component {
  render () {
    return (
      <div className='typography'>
        <h1>Typography</h1>
        <hr />
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <div><h1>Main Heading</h1></div>
            <div><h2>Subpage title</h2></div>
            <div><h3>Section header</h3></div>
            <div><h4>Sub section heading</h4></div>
            <div><p><strong>Bolded body content</strong></p></div>
            <div><p><i>Italic body content</i></p></div>
            <div><p>Regular body content</p></div>
            <div><a href='#'>Link</a></div>
            <div>
              <br />
              <p><strong>List Style (interactable)</strong></p>
              <ul className='is-interactable'>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
              </ul>
              <br />
              <p><strong>List Style (non-interactable)</strong></p>
              <ul>
                <li>consectetur adipiscing</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                <li>laboris nisi ut aliquip</li>
                <li>a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</li>
              </ul>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6'>
            <h3>Example</h3>
            <p>Lorem <b>ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <i>labore et dolore magna aliqua. Ut enim</i> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <a href='#'>cillum dolore eu</a> fugiat nulla pariatur. <i>Excepteur sint occaecat</i> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <b>eu fugiat nulla</b> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <i>tempor incididunt ut labore et </i>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <b>culpa qui officia deserunt mollit</b> anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
}
