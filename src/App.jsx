import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const Header = () => <h2>Header</h2>
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

