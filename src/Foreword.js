import React, { Component } from "react";
import "./Foreword.css";

class Foreword extends Component {
  render() {
    let d = new Date();
    return (
      <div id="foreword-wrapper">
        <p>
          May 22 is also known as <b>Bitcoin Pizza Day</b> to commemorate the
          first ever purchase made with Bitcoin by Laszlo Hanyecz.
        </p>
        <blockquote cite="https://en.bitcoin.it/wiki/Laszlo_Hanyecz">
          On May 17, 2010, Laszlo posted a request to buy pizza with bitcoin. It
          was on May 22 that he reported successfully trading{" "}
          {Number(10000).toLocaleString()} BTC for two pizzas, with{" "}
          <a
            style={{ color: "#CDAB65" }}
            href="https://en.bitcoin.it/wiki/Jercos"
          >
            Jercos
          </a>{" "}
          ordering the pizza and receiving the coins. The bitcoins were quoted
          at $41 at the time of the offer.
          <footer>
            —
            <a
              style={{ color: "#CDAB65" }}
              href="https://en.bitcoin.it/wiki/Laszlo_Hanyecz"
            >
              Bitcoin Wiki
            </a>
          </footer>
        </blockquote>
        <p>
          This fun pet project is just a way of showing the change in value
          Bitcoin has experienced over the last {d.getFullYear() - 2010} years
          while also helping me practice with React, REST APIs, CSS Frameworks
          and continuous integration.
        </p>
      </div>
    );
  }
}

export default Foreword;
