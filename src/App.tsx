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
          response: data.result,
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
          <div>Response is empty</div>
        )}
      </div>
    );
  }
}

export default App;
