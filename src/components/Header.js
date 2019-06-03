import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper header">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
