import React, { Component } from "react";
import "../styles/main.scss";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class LoginNav extends Component {

    render() {
        return (
            <div className="app-container col-12">
                <div className="log-panel">
                    <Link to="/login">Zaloguj</Link>
                    <Link to="/signin">Załóż konto</Link>
                </div>
            </div>
        )
    }
}

export default LoginNav;