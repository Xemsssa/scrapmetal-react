import React from 'react';

export default class Hamburger extends React.Component {
    render() {
        return (
            <a href="show" class="hamburger navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                <div class="line"></div>
                {/* todo */}
                {/* <div class="line" style="margin: 5px 0;"></div> */}
                <div class="line"></div>
            </a>
        )
    }
}