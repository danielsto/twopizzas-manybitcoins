import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProgressMessage.css";

class ProgressMessage extends Component {
  daysPassed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
  }

  progressMessage(progress) {
    if (progress < 50) {
      return <p>We still have a while until the next Bitcoin Pizza Day</p>;
    } else if (progress >= 50 && progress < 60) {
      return <p>We are halfway there until the next Bitcoin Pizza Day!</p>;
    } else if (progress >= 60 && progress < 80) {
      return <p>We are close, Bitcoin Pizza Day is coming!</p>;
    } else if (progress >= 80 && progress < 100) {
      return (
        <p>
          It's almost there! Only a few days until next Bitcoin Pizza Day!!!
        </p>
      );
    } else if (progress >= 100) {
      return (
        <p>
          Bitcoin Pizza Day was last May 22. We need to wait until next year
          now!
        </p>
      );
    }
  }

  render() {
    const todaysDate = new Date();
    const todaysDateYear = todaysDate.getFullYear();
    const startYearDate = new Date(todaysDateYear, 0, 1);

    const daysUntilPizzaDay = new Date(todaysDateYear, 4, 22) - startYearDate;
    const daysUntilToday = todaysDate - startYearDate;

    const progress = Math.ceil((daysUntilToday / daysUntilPizzaDay) * 100);

    return (
      <div className="progress-wrapper">
        {this.progressMessage(progress)}
        <ProgressBar
          style={{ backgroundColor: "#FFFFFF" }}
          animated
          now={progress}
          label={`${progress}%`}
          variant="info"
        />
      </div>
    );
  }
}

export default ProgressMessage;
