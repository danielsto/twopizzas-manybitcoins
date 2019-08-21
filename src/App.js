import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Foreword from './Foreword';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
        <h1>2 Pizzas 2 Many Bitcoins</h1>
        <Foreword />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
