import React, { Component } from "react";
import "./App.css";
import Foreword from "./Foreword";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import ProgressMessage from './ProgressMessage'
import LocalBusiness from './LocalBusiness'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>2 PIZZAS 2 MANY BITCOINS</h1>
        <Foreword />
        <Dashboard />
        <ProgressMessage />
        <LocalBusiness />
        <Footer />
      </div>
    );
  }
}

export default App;
