import React, { Component } from "react";
import "../styles/main.scss";

import Textbox from './textbox.jsx';

class Button extends Component {
    render() {
        return (
            <div className="app-container col-12">
                <div className="container-flex">
                    <div className="box-flex">
                        <Textbox text="oddaj rzeczy" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;