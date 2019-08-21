import React, {Component} from 'react';

class May extends Component {
    constructor(props) {
        super(props)

        this.state = {
            historicalPrice: null,
            updatedAt: null
        }
    }

    componentDidMount(){
        this.getData = () => {
          const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-18&end=2010-07-19';
    
          fetch(url).then(r => r.json())
            .then((bitcoinData) => {
                this.setState({
                    historicalPrice: Object.values(bitcoinData.bpi)[0],
                    updatedAt: bitcoinData.time.updated
                  })
                console.log()
            })
            .catch((e) => {
              console.log(e);
            });
        }
        this.getData();
    }

    render() {
        return (
            <div>
                <h2>BITCOIN PRICE IN May 22nd 2010</h2>
                <p>Price: $ {0.0025}</p>
            </div>
        );
    }
}

export default May;