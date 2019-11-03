import React, { Component } from "react";
import { Link } from 'react-router-dom';


class LoginPanel extends Component {

    render() {
        return (
            <div className="app-container">

                <div className="login-panel">
                    <Link to="/login">Zaloguj</Link>
                    <Link to="/signup">Załóż konto</Link>
                </div>

            </div>
        )
    }
}

export default LoginPanel;