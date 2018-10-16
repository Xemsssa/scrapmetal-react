import React from 'react';
import Hamburger from './Hamburger';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <div class="navBlock">
                <Hamburger/>
                <div class="navbar-collapse collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav headerNav navLink_theme font_bold">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link headerNav_link  ">
                                    Главная
                                </a>
                        </li>    
                        <li class="nav-item">
                            <a href="about_us.html" class="headerNav_link link">
                                О нас
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="contacts.html" class="headerNav_link link">
                                Реквизиты и контакты
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#docs" class="headerNav_link link">
                                Полезные документы
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

