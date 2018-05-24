import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Sign In</a>;
      default:
        return <a href='#'>Logout</a>;
    }
  }

  render() {
    return (
      <div className='header-wrapper'>
        <a className='header-logo' href='#'>Logo</a>
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
