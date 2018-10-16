import React, { Component } from 'react';

class HeaderContacts extends Component {
    render() {
        return(
            <div class="headerContacts text_color">
                <a href="tel:+74991308035" class="headerContacts_link link font_bold text_color">
                    <div class="headerPhone_number">+7(499)130-80-35</div>
                    <div class="headerPhone_text">
                        <img src="images/call.png" class="headerContacts_image" alt="call"/>
                        <span class="headerContacts_text">Обратная связь</span>
                    </div>
                </a>
            </div>
        )
    } 
}

export default HeaderContacts;
