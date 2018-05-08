import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' component={Header} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App

