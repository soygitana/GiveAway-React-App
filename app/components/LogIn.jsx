import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import {Link} from 'react-router-dom';

import Deco from './Deco.jsx';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}



class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: '',
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


export default LogIn;