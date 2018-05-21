import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <a className='header-logo' href='#'>Logo</a>
        <ul className='header-menu'>
          <li>
            <a href='/auth/google'>Sign In</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header
