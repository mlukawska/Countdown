import React from 'react';
import Countdown from './Countdown.js';
import './style/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="event-name">
          <p><span>New Year</span> will come in</p>
        </div>
        <div className="app-countdown">
          <Countdown date={`2020-01-01T00:00:00`} />
        </div>
        <div className="chooser">
          <p>Choose another event</p>
          <div className="chooser-buttons">
            <button>Summer</button>
            <button>Christmas Eve</button>
            <button>New Year</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


