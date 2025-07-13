import React from 'react';

import './SearchPanel.css';

interface SearchPanelProps {
  query: string;
  onSubmit: (event: React.FormEvent) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class SearchPanel extends React.Component<SearchPanelProps> {
  render() {
    const { query, onSubmit, handleInputChange } = this.props;

    return (
      <div className="search-section">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={query}
            placeholder="Search"
            className="search"
            onChange={handleInputChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}
