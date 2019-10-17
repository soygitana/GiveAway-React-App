import React, { Component } from "react";
import "../styles/main.scss";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Button extends Component {
    render() {
        return (
            <div className="app-container col-12">
                <div className="container-flex">
                    <div className="box-flex">
                        <div className="text-boxes">
                            <Link className="text-box" to="/login">Oddaj rzeczy</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;