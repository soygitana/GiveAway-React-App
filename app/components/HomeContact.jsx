import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './Deco.jsx';
import ContactForm from './ContactForm.jsx';


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