import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";

import Deco from './Deco.jsx';

class LogIn extends Component {

    render() {
        return (
            <section className="signup">
                <div className="app-container col-12">
                    <div className="container-flex">

                        <h2 className="title">Zaloguj się</h2>
                        <Deco />
                        <form className="contact-form">
                            <div className="form-background">
                                <label>
                                    <p className="input-title">Email</p>
                                    <input type="text" />
                                </label>
                                <label>
                                    <p className="input-title">Hasło</p>
                                    <input type="text" />
                                </label>
                            </div>
                            <div className="container-flex container-btn">
                                <input className="submitBtn" type="submit" value="Załóż konto" />
                                <input className="submitBtn" type="submit" value="Zaloguj się" />
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}


export default LogIn;