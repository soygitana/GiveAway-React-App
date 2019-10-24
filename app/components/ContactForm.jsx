import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import axios from 'axios'

import SuccessMessage from './SuccessMessage.jsx';
import { validate } from './validation.js';


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

        //   var bodyFormData = new FormData();
        const bodyFormData = {
            name,
            email,
            msg: message
        };

        console.log(bodyFormData)

        const errors = validate(name, email, message);

        if (errors.length > 0) {
            this.setState({ errors });
            console.log("invalid form!")
            return;
        }

        if (errors.length === 0) {
            // submit the data...
            console.log("valid form!")



            axios({
                method: 'post',
                url: 'https://fer-api.coderslab.pl/v1/portfolio/contact',
                contentType: "application/json",
                data: bodyFormData,
            })
                .then(function (res) {
                    this.setState({
                        showSuccess: "true"
                    });
                    res.status(200).send("Success!")
                })
                .catch(function (error) {
                    console.log(error.message);
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
                                <span className="error">Wiadomość musi mieć conajmniej 10 znaków</span>}
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




