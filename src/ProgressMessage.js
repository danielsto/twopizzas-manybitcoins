import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProgressMessage.css"

class ProgressMessage extends Component {

  days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
  }

  progress_message(progress) {
      if (progress < 50) {
          return (
          <p>We still have a while until the next Bitcoin Pizza Day</p>
          );
      } else if (progress >= 50 && progress < 60) {
          return (
              <p>We are halfway there until the next Bitcoin Pizza Day!</p>
          );
      } else if (progress >= 60 && progress < 80) {
          return (
              <p>We are close, Bitcoin Pizza Day is coming!</p>
          );
      } else if (progress >= 80) {
          return (
              <p>It's almost there! Only a few days until next Bitcoin Pizza Day!!!</p>
          );
      }
  }

  render() {
    let daysUntilPizzaDay = this.days_passed(new Date(new Date().getFullYear(), 4, 22));
    let daysUntilToday = this.days_passed(new Date(2020, 4, 16));

    const progress = Math.floor((daysUntilToday / daysUntilPizzaDay) * 100)

    return (
      <div className="progress-wrapper">
        {this.progress_message(progress)}
        <ProgressBar style={{backgroundColor: "#FFFFFF"}} animated now={progress} label={`${progress}%`} variant="info"/>
      </div>
    );
  }
}

export default ProgressMessage;
