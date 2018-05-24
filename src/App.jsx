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
            <Route exact path='/' component={SearchMap} />
            <Route path='/review' component={Review} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App)

