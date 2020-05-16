import React, { Component } from "react";
import "./App.css";
import Foreword from "./Foreword";
import Footer from "./Footer";
import Dashtrap from "./Dashtrap";
import ProgressMessage from './ProgressMessage'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>2 PIZZAS 2 MANY BITCOINS</h1>
        <Foreword />
        <Dashtrap />
        <ProgressMessage />
        <Footer />
      </div>
    );
  }
}

export default App;
