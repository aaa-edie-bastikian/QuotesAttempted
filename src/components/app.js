import React, { Component } from 'react';
import QuotesAttemptedDisplay from '.././containers/quotes-attempted-display';
import QuotesAttempted from '.././containers/quotes-attempted';
import './app.css';

const appStyle = {
  margin: '100px',
  display:'inline-block'
}
export default class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <QuotesAttemptedDisplay />
        <br></br>
        <QuotesAttempted />
      </div>
    );
  }
}
