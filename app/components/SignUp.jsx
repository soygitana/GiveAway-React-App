import React, { Component } from "react";
import "../styles/main.scss";
import {Link} from 'react-router-dom';
import Deco from './Deco.jsx';

import {validEmailRegex} from './regex.js';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            password2: null,
            errors: {
                email: '',
                password: '',
                password2: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 6
                        ? 'password must be 6 characters in length'
                        : '';
                break;
                case 'password2':
                    errors.password =
                        this.state.password2 !== this.state.password
                            ? 'passwords have to be the same'
                            : '';
                    break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.log('Valid Form');
        } else {
            console.log('Invalid Form')
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
                        <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
                        <div className="container-flex form-background">
                                <label><p className="input-title">Email</p></label>
                                    <input type="text" name='email' onChange={this.handleChange} noValidate/>
                                    {errors.email.length > 0 &&
                               <span className="error">Podany email jest nieprawidłowy</span>}
                                <label><p className="input-title">Hasło</p></label>
                                    <input type="password" name='password' onChange={this.handleChange} noValidate  />
                                    {errors.password.length > 0 &&
                             <span className="error">Hasło musi mieć conajmniej 6 znaków</span>}
                             <label><p className="input-title">Powtórz hasło</p></label>
                                    <input type="password" name='password2' onChange={this.handleChange} noValidate  />
                                    {errors.password.length > 0 &&
                             <span className="error">Hasło musi być takie samo</span>}
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