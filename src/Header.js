import React, { Component } from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderContacts from './HeaderContacts';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header header">
                <HeaderLogo/>
                <HeaderNav/>
                <HeaderContacts/>
            </header>
        )
    }
}

