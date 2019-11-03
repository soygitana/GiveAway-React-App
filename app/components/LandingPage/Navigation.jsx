import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="app-container col-12">
                <nav class="page-nav">
                    <ul class="page-nav-list">
                        <li><Link to='/'>start</Link></li>
                        <li><AnchorLink href='#steps'>o co chodzi?</AnchorLink></li>
                        <li><AnchorLink href='#about'>o nas</AnchorLink></li>
                        <li><AnchorLink href='#organizations'>fundacja i organizacje</AnchorLink></li>
                        <li><AnchorLink href='#contact'>kontakt</AnchorLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;