import React, {Component} from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPrice: null,
            updatedAt: null
        }
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
        this.refresh = setInterval(() => this.getData(), 90000);
    }

    render() {
      return (
        <div id="dashboard-wrapper">
            <div className="dashboard-element">
              <h2>BITCOIN price on {this.state.updatedAt}</h2>
              <p>$ {this.state.currentPrice}</p>
            </div>
            <div className="dashboard-element">
              <h2>BITCOIN price in May 22, 2010</h2>
              <p>$ {0.0025}</p>
            </div>
            <div className="dashboard-element">
              <h2>How many pizzas you could buy today with BTC 10,000</h2>
              <p>{Math.floor(this.state.currentPrice*10000/25)} $12 pizzas instead of just 2</p>
              <p>If you ate 3 pizza(s) a day, they would last you {Math.floor(this.state.currentPrice*10000/25/365/3)} years</p>
            </div>
        </div>
    );
    }
}

export default Dashboard;