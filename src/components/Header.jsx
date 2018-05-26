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
        <div className='nav-left'>
          <Navigation />
        </div>
        <div className='nav-right'>
          <div className='nav-tools'>
            { this.renderContent() }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header)
