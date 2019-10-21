import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import {Link} from 'react-router-dom';
import Deco from './Deco.jsx';

class SignUp extends Component {

    render() {
        return (
            <section className="signup">
                <div className="app-container col-12">
                    <div className="container-flex">

                        <h2 className="title">Załóż konto</h2>
                        <Deco />
                        <form className="contact-form">
                            <div className="container-flex form-background">
                                <label>
                                    <p className="input-title">Email</p>
                                    <input type="text" />
                                </label>
                                <label>
                                    <p className="input-title">Hasło</p>
                                    <input type="password" />
                                </label>
                                <label>
                                    <p className="input-title">Powtórz hasło</p>
                                    <input type="password" />
                                </label>
                            </div>
                            <div className="container-flex container-btn">
                                <Link className="link" to="/login">Zaloguj się</Link>
                                <input className="link" type="submit" value="Załóż konto" />
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}

export default SignUp;