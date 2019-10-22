import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import axios from 'axios'

import SuccessMessage from './SuccessMessage.jsx';


function validate(name, email, message) {
    
    //  storing errors for all fields in a signle array

    const errors = [];

    // regular expression for email validation

    function emailIsValid (email) {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return validEmailRegex.test(email)
      }


    if (name.length === 0) {
        errors.push("name can't be empty");
        console.log('invalid name')
    }
    if (email.length === 0 || !emailIsValid(email)) {
        errors.push("invalid email");
        console.log('incorrect email')
    }

    if (message.length < 120) {
        errors.push("message should be at least 120 characters long");
        console.log('invalid message')
    }

    return errors;
}


class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            showSuccess: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();

        const name = ReactDOM.findDOMNode(this._nameInput).value;
        const email = ReactDOM.findDOMNode(this._emailInput).value;
        const message = ReactDOM.findDOMNode(this._messageInput).value;


        const errors = validate(name, email, message);
        if (errors.length > 0) {
            this.setState({ errors });
            console.log("invalid form!")
            return;
        }

        if (errors.length === 0) {
            // submit the data...
            console.log("valid form!")
            this.setState({
                showSuccess: "true"
            });
            this.myFormRef.reset();
        }

    }

    render() {
        const { errors } = this.state;
        return (
            <>

                <SuccessMessage showSuccess={this.state.showSuccess} />

                <div className="container-flex contact-form">
                    <form ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
                        <div className="container-flex">
                            <div className="box-flex">
                                <label htmlFor="name"><p className="input-title"> Wpisz swoje imię:</p></label>
                                <input name='name' ref={nameInput => (this._nameInput = nameInput)}
                                    type="text"
                                    placeholder="name" />
                                {errors.length > 0 &&
                                    <span className="error">Pole imię nie może być puste</span>}
                            </div>
                            <div className="box-flex">
                                <label htmlFor="email"><p className="input-title">Wpisz swoj email:</p></label>
                                <input name='email' ref={emailInput => (this._emailInput = emailInput)}
                                    type="text"
                                    placeholder="email" />
                                {errors.length > 0 &&
                                    <span className="error">Podany email jest nieprawidłowy</span>}
                            </div>
                        </div>
                        <div className="box-flex">
                            <label htmlFor="message"><p className="input-title"> Wpisz swoją wiadomość:</p></label>
                            <textarea name='message' ref={messageInput => (this._messageInput = messageInput)}
                                type="text"
                                placeholder="message" />
                            {errors.length > 0 &&
                                <span className="error">Wiadomość musi mieć conajmniej 120 znaków</span>}
                        </div>
                        <div className='info'>
                        </div>
                        <div className='container-flex container-btn'>
                            <button type="submit" className="submitBtn">Wyślij</button>
                        </div>

                    </form>
                </div>
            </>
        );
    }
}
export default SignUpForm;




