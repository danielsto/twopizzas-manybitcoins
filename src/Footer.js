import React, { Component } from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <div id="footer-wrapper">
        <p>
          If you enjoyed this just-for-fun project, feel free to say hi on
          Twitter <a href="https://twitter.com/daniel_swdev">@daniel_swdev</a>{" "}
          and check out <a href="https://danielsarmiento.dev/">my blog</a>.
        </p>
        <div className="social-icons">
          <SocialIcon url="http://twitter.com/daniel_swdev" style={{ margin: "1em" }}/>
          <SocialIcon url="https://www.linkedin.com/in/danielsarmientorocha/" style={{ margin: "1em" }}/>
          <SocialIcon url="https://github.com/danielsto" style={{ margin: "1em" }}/>
        </div>
      </div>
    );
  }
}

export default Footer;
