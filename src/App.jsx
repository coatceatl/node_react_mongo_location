import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './components/Header.jsx';
import SearchMap from './components/SearchMap.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' component={Header} />
            <Route path='/' component={SearchMap} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App

