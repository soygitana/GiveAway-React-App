import React, { Component } from "react";
import "../styles/main.scss";

class Navigation extends Component {
    render() {
        return (
            <nav class="page-nav">
                <ul class="page-nav-list">
                    <li><a href="#">start</a></li>
                    <li><a href="#">o co chodzi?</a></li>
                    <li><a href="#">o nas</a></li>
                    <li><a href="#">fundacja i organizacje</a></li>
                    <li><a href="#">kontakt</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;