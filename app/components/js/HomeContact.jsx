import React, { Component } from "react";
import "../../styles/main.scss";

import Deco from './deco.jsx';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-flex contact-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="box-flex">
                        <label>
                            <p> Wpisz swoje imię:</p>
                            <input type="text" placeholder="Krzysztof" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="box-flex">
                        <label>
                            <p> Wpisz swój email:</p>
                            <input type="text" placeholder="abc@xyz.pl" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="box-flex">
                        <label>
                            <p> Wpisz swoją wiadomość:</p>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
                        </label>
                    </div>
                    <input className="sumbitBtn" type="submit" value="Wyślij" />
                </form>
            </div>
        );
    }
}


class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <p>Copyright by Coders Lab</p>
                </div>
            </>
        )
    }
}


class HomeContact extends Component {
    render() {
        return (
            <>
                <section id="contact" className="home-contact">
                    <div className="app-container col-12">
                        <div className="container-flex">
                            <div className="box-flex"></div>
                            <div className="box-flex box-contact">
                                <h2 className="title">Skontaktuj się z Nami!</h2>
                                <Deco />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </>
        )
    }
}

export default HomeContact;