import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { remainingTime: moment.duration(props.endDate.diff(moment())) };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const remainingTime = moment.duration(this.props.endDate.diff(moment()));
      this.setState({ remainingTime });
      if (remainingTime.asSeconds() <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { remainingTime } = this.state;

    return (
      <div>
        { remainingTime.asSeconds() > 0 ?
          <div>
            <div>{remainingTime.days()} Ngày {remainingTime.hours()} Giờ {remainingTime.minutes()} Phút {remainingTime.seconds()} Giây</div>
          </div>
          :
          <div>Hết thời gian!</div>
        }
      </div>
    );
  }
}

export default Countdown;
