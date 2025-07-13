import React, { Component } from 'react';
import './App.css';

import { ResultView } from './components/ResultView/ResultView';
import { SearchPanel } from './components/SearchPanel/SearchPanel';

type AppState = {
  query: string;
  response: [] | null;
};

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);

    const savedQuery = localStorage.getItem('swapiPeopleSearch') || '';

    this.state = {
      query: savedQuery,
      response: null,
    };
  }

  componentDidMount(): void {
    this.handleSubmit();
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value.trim() });
  };

  handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();

    const searchQuery = this.state.query
      ? `?name=${this.state.query}`
      : '?expanded=true';

    localStorage.setItem('swapiPeopleSearch', this.state.query);

    fetch(`https://www.swapi.tech/api/people/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          response: data.result || data.results,
        });
      })
      .catch((err) => console.error(err));
  };

  render(): React.ReactNode {
    return (
      <div className="content-wrapper">
        <SearchPanel
          query={this.state.query}
          onSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.response ? (
          <ResultView data={this.state.response} />
        ) : (
          <div>No result found</div>
        )}
      </div>
    );
  }
}

export default App;
