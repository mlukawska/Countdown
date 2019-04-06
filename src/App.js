import React from 'react';
import Countdown from './Countdown.js';
import './style/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <p>The day is coming...</p>
        </div>
        <div className="app-countdown">
          <Countdown date={`2020-01-01T00:00:00`} />
          <p className="event-name">left to <span>New Year!</span></p>
        </div>
      </div>
    );
  }
}

export default App;


