import React, { Component } from "react";
import "../styles/main.scss";

class Login extends Component {
    render() {
        return (
            <div className="log-panel">
                <a className="login" href="">Zaloguj</a>
                <a classname="signin" href="">Załóż konto</a>
            </div>
        )
    }
}

export default Login;