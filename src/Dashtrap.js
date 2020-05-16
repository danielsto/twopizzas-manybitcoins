import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashtrap.css";

class Dashtrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: null,
      updatedAt: null,
      selectValue: 1,
    };
  }

  // USD to currencies exchange rate as of 2010/05/22 not in use yet
  dollarToCurrency = {
    EUR: 0.7964,
    GBP: 0.6924,
  };

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  componentDidMount() {
    this.getData = () => {
      const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

      fetch(url)
        .then((r) => r.json())
        .then((bitcoinData) => {
          this.setState({
            currentPrice: bitcoinData.bpi.USD.rate_float,
            updatedAt: bitcoinData.time.updated,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    this.getData();
    // Updates every minute (60000 miliseconds)
    this.refresh = setInterval(() => this.getData(), 60000);
  }

  anniversary() {
    let thisYear = new Date().getFullYear();
    if (thisYear % 5 === 0) {
      return (
        <p className="fun-fact">
          <Badge variant="info">Fun fact</Badge> This year marks the{" "}
          {thisYear - 2010} year anniversary of the Bitcoin Pizza Day
        </p>
      );
    }
  }

  render() {
    // console.log(this.dollarToCurrency['EUR']);

    return (
      <div className="dashwrapper">
        <CardDeck style={{ marginBottom: "5vh" }}>
          <Card>
            <Card.Body>
              <Card.Title>BITCOIN price then</Card.Title>
              <Card.Text>
                <p className="money">$ {Number(0.0025).toLocaleString()}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">May 22, 2010</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>BITCOIN price now</Card.Title>
              <Card.Text>
                <p className="money">
                  {" "}
                  $ {Number(this.state.currentPrice).toLocaleString()}
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{this.state.updatedAt}</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                {Number(10000).toLocaleString()} BTC right now
              </Card.Title>
              <Card.Text>
                would buy{" "}
                <b>
                  {Number(
                    Math.floor((this.state.currentPrice * 10000) / 25)
                  ).toLocaleString()}
                </b>{" "}
                pizzas instead of just 2. That's{" "}
                {Math.round(
                  ((this.state.currentPrice * 10000) / 25 / 2) * 100
                ).toLocaleString()}
                % more pizza.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{this.state.updatedAt}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <p className="fun-fact">
          <Badge variant="info">Fun fact</Badge> If you ate{" "}
          <select defaultValue="1" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>{" "}
          pizza(s) a day, they would last you{" "}
          {Number(
            Math.floor(
              (this.state.currentPrice * 10000) /
                25 /
                365 /
                this.state.selectValue
            )
          ).toLocaleString()}{" "}
          years
        </p>
        {this.anniversary()}
      </div>
    );
  }
}

export default Dashtrap;
