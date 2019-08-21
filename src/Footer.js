import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <p>If you enjoyed this just-for-fun project, feel free to say hi on Twitter <a href="https://twitter.com/daniel_swdev">
                    @daniel_swdev</a> and check out <a href="https://danielsarmiento.dev/">my blog</a>
                </p>
            </div>
        );
    }
}

export default Footer;