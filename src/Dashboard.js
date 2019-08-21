import React, {Component} from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPrice: null,
            updatedAt: null,
            selectValue: 1
        }
    }

    // USD to currencies exchange rate as of 2010/05/22 not in use yet
    dollarToCurrency = {
      EUR: 0.7964,
      GBP: 0.6924,
    }

    handleChange = (event) => {
      this.setState({ selectValue: event.target.value })
    }

    componentDidMount(){
        this.getData = () => {
          const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    
          fetch(url).then(r => r.json())
            .then((bitcoinData) => {
              this.setState({
                currentPrice: bitcoinData.bpi.USD.rate_float,
                updatedAt: bitcoinData.time.updated
              })
            })
            .catch((e) => {
              console.log(e);
            });
        }
        this.getData();
        // Updates every minute (60000 miliseconds)
        this.refresh = setInterval(() => this.getData(), 60000);
    }

    render() {
      // console.log(this.dollarToCurrency['EUR']);
      return (
        <div id="dashboard-wrapper">
            <div className="dashboard-element">
              <h3>BITCOIN value</h3>
              <p className="last-update">{this.state.updatedAt}</p>
              <p className="money">$ {Number(this.state.currentPrice).toLocaleString()}</p>
            </div>
            <div className="dashboard-element">
              <h3>BITCOIN value</h3>
              <p className="last-update">May 22, 2010</p>
              <p className="money">$ {Number(0.0025).toLocaleString()}</p>
            </div>
            <div className="dashboard-element">
              <h3>{Number(10000).toLocaleString()} BTC right now</h3>
              <p>would buy <b>{Number(Math.floor(this.state.currentPrice*10000/25)).toLocaleString()}</b> pizzas instead of just 2</p>
              <p>Fun fact: If you ate 3 pizza(s) a day, they would last you {Number(Math.floor(this.state.currentPrice*10000/25/365/3)).toLocaleString()} years</p>
            </div>
            <div className="dashboard-element" id="fun-facts">
              <p>Fun fact: If you ate <select defaultValue="1" onChange={this.handleChange}>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                        <option value="6" >6</option>
                                        <option value="7" >7</option>
                                        <option value="8" >8</option>
                                        <option value="9" >9</option>
                                        <option value="10">10</option>
                                      </select> pizza(s) a day,
              they would last you {Number(Math.floor(this.state.currentPrice*10000/25/365/this.state.selectValue)).toLocaleString()} years</p>
            </div>
        </div>
    );
    }
}

export default Dashboard;