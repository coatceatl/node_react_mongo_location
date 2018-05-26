import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className='jumbotron container'>
        <h1 className='display-4'>Discover the perfect place!</h1>
        <form className="form-inline my-2 my-lg-0">
          <div className="form-group">
            <label for="menuItem"></label>
            <select className="form-control" id="menuItem">
              <option>Find...</option>
              <option>Top</option>
              <option>Cofee</option>
              <option>Breacfast</option>
              <option>Restaurant</option>
            </select>
          </div>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default HomePage;
