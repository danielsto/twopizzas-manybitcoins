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
              <h3>{Number(10000).toLocaleString()} BTC today</h3>
              <p><b>{Number(Math.floor(this.state.currentPrice*10000/25)).toLocaleString()}</b> pizzas instead of just 2</p>
              <p>If you ate 3 pizza(s) a day, they would last you {Number(Math.floor(this.state.currentPrice*10000/25/365/3)).toLocaleString()} years</p>
            </div>
        </div>
    );
    }
}

export default Dashboard;