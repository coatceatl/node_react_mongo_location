import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation.jsx';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Sign In</a>;
      default:
        return <a href='api/logout'>Logout</a>;
    }
  }

  render() {
    return (
      <div className='header-wrapper'>
        <Navigation />
        <ul className='header-menu'>
          { this.renderContent() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header)
