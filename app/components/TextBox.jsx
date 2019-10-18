import React, { Component } from "react";
import "../styles/main.scss";

class Textbox extends Component {
    render() {
        const text = this.props.text;
        return (
            <a className="text-box">{text}</a>
        )
    }
}

export default Textbox;