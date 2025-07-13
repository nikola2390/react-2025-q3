import { Component } from 'react';
import './Spinner.css';

export class Spinner extends Component {
  render() {
    return (
      <div className="container">
        <div className="spinner"></div>
        <div className="text">Loading...</div>
      </div>
    );
  }
}
