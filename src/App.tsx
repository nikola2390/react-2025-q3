import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="content-wrapper">
        <div className="search-section">
          <form>
            <input type="text" placeholder="Search" className="search" />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="result"></div>
      </div>
    );
  }
}

export default App;
