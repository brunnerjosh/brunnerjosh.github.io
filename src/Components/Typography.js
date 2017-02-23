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
            <ul>
              <li><h1>Main Heading</h1></li>
              <li><h2>Subpage title</h2></li>
              <li><h3>Section header</h3></li>
              <li><h4>Sub section heading</h4></li>
              <li><p><strong>Bolded body content</strong></p></li>
              <li><p><i>Italic body content</i></p></li>
              <li><p>Regular body content</p></li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-6'>
            <h3>Example</h3>
            <p>Lorem <b>ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <i>labore et dolore magna aliqua. Ut enim</i> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <i>Excepteur sint occaecat</i> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <b>eu fugiat nulla</b> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <i>tempor incididunt ut labore et </i>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <b>culpa qui officia deserunt mollit</b> anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
}
