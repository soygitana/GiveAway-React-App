import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";

import Deco from './Deco.jsx';

class SignUp extends Component {
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
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="signin">
                <div className="app-container col-12">

                    <div className="container-flex">
                        <div className="box-flex">
                            <h2 className="title">Załóż konto</h2>
                            <Deco />
                        </div>
                        <div className="box-flex">
                            <form className="contact-form" onSubmit={this.handleSubmit}>
                                <div className="container-flex">
                                    <label>
                                        <p>Email</p>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <label>
                                        <p>Hasło</p>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <label>
                                        <p>Powtórz hasło</p>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <input className="sumbitBtn" type="submit" value="Załóż konto" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;