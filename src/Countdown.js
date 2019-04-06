import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }
  
  calculateCountdown(eventDate) {
    let diff = (Date.parse(new Date(eventDate)) - Date.parse(new Date())) / 1000;
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= (365 * 86400)) {
      timeLeft.years = Math.floor(diff / (365 * 86400));
      diff = diff - timeLeft.years * 365 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff = diff - timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff = diff - timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff = diff - timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="countdown">
        <span className="countdown-col">
          <span className="countdown-col-element">
              <p>{this.addLeadingZeros(countDown.days)}</p>
              <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>
        <span className="countdown-col">
          <span className="countdown-col-element">
            <p>{this.addLeadingZeros(countDown.hours)}</p>
            <span>{countDown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </span>
        </span>
        <span className="countdown-col">
          <span className="countdown-col-element">
            <p>{this.addLeadingZeros(countDown.min)}</p>
            <span>{countDown.min === 1 ? 'Minute' : 'Minutes'}</span>
          </span>
        </span>
        <span className="countdown-col">
          <span className="countdown-col-element">
            <p>{this.addLeadingZeros(countDown.sec)}</p>
            <span>{countDown.sec === 1 ? 'Second' : 'Seconds'}</span>
          </span>
        </span>
      </div>
    );
  }
}


export default Countdown;