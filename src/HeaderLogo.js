import React, { Component } from 'react';
import logo from './logo.png';


class HeaderLogo extends Component {
    render() {
        return (
            <a href="index.html" class="headerLogo margin_bottom_small">
                <img src={logo} alt="logo"/>
            </a>
        );
      }
}

export default HeaderLogo;