import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import Deco from '../LandingPage/Deco.jsx';


import { validate2 } from '../functions/validation2.js';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        const email = ReactDOM.findDOMNode(this._emailInput).value;
        const password = ReactDOM.findDOMNode(this._passwordInput).value;

        const errors = validate2(email, password);

        if (errors.length > 0) {
            this.setState({ errors });
            console.log("invalid form!")
            return;
        }

        if (errors.length === 0) {
            // submit the data...
            console.log("valid form!")
            this.setState({
                errors: []
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <section className="signup">
                <div className="app-container col-12">
                    <div className="container-flex">

                        <h2 className="title">Zaloguj się</h2>
                        <Deco />
                        <form ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
                            <div className="container-flex form-background">
                                <label htmlFor="email"><p className="input-title">Wpisz swój email:</p></label>
                                <input name='email' ref={emailInput => (this._emailInput = emailInput)}
                                    type="text"
                                />
                                {errors.length > 0 &&
                                    <span className="error">Podany email jest nieprawidłowy</span>}


                                <label htmlFor="password"><p className="input-title">Hasło</p></label>
                                <input name='password' ref={passwordInput => (this._passwordInput = passwordInput)}
                                    type="password"
                                />
                                {errors.length > 0 &&
                                    <span className="error">Hasło musi mieć conajmniej 6 znaków</span>}
                            </div>
                            <div className="container-flex container-btn">
                                <Link className="link" to="/signup">Załóż konto</Link>
                                <input className="link" type="submit" value="Zaloguj się" />
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}


export default Login;