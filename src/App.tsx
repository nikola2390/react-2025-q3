import React, { Component } from 'react';
import './App.css';

type AppState = {
  query: string;
  response: string | null;
};

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      query: '',
      response: null,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`https://www.swapi.tech/api/people/?name=${this.state.query}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          response: JSON.stringify(data.result),
        });
      })
      .catch((err) => console.error(err));
  };

  render(): React.ReactNode {
    return (
      <div className="content-wrapper">
        <div className="search-section">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="search"
              onChange={this.handleInputChange}
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="result">{this.state.response || 'Result is empty'}</div>
      </div>
    );
  }
}

export default App;
