import React, { Component } from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <div id="footer-wrapper">
        <p>
          If you enjoyed this just-for-fun project, feel free to say hi on
          Twitter{" "}
          <a
            style={{ color: "#856300" }}
            href="https://twitter.com/danieIsarmiento"
          >
            @danieIsarmiento
          </a>{" "}
          and check out{" "}
          <a style={{ color: "#856300" }} href="https://danielsarmiento.com/">
            my blog
          </a>
          .
        </p>
        <div className="social-icons">
          <SocialIcon
            url="http://twitter.com/danieIsarmiento"
            style={{ margin: "0.5em" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/danielsarmientorocha/"
            style={{ margin: "0.5em" }}
          />
          <SocialIcon
            url="https://github.com/danielsto"
            style={{ margin: "0.5em" }}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
