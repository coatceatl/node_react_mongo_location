import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header.jsx';
import SearchMap from './components/SearchMap.jsx';
import Review from './components/Review.jsx';
import HomePage from './components/HomePage.jsx';
const Dashboard = () => <h1>Dashboard</h1>;
const Footer = () => <h1>Footer</h1>;


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={HomePage} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/searchmap' component={SearchMap} />
            <Route path='/review' component={Review} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

