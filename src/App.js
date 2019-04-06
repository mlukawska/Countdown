import React from 'react';
import Countdown from './Countdown.js';
import './style/index.scss';

class App extends React.Component {
  state = {
    date: `2019-06-23T00:00:00`,
    name: 'Summer'
  }

  setFields = (date, name) => this.setState({date, name})

  render() {
    return (
      <div className="app">
        <div className="event-name">
          <p><span>{this.state.name}</span></p>
          <p>will come in</p>
        </div>
        <div className="app-countdown">
          <Countdown date={this.state.date} />
        </div>
        <div className="chooser">
          <p>Choose another event</p>
          <div className="chooser-buttons">
            <button className="button-summer" onClick={() => this.setFields('2019-06-21T00:00:00', 'Summer')} >Summer</button>
            <button className="button-christmas-eve" onClick={() => this.setFields('2019-12-24T00:00:00', 'Christmas Eve')}>Christmas Eve</button>
            <button className="button-new-year" onClick={() => this.setFields('2020-01-01T00:00:00', 'New Year')}>New Year</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


