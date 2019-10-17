import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './deco.jsx';

class Steps extends Component {
    render() {
        return (
            <div id="steps">
            <div className="app-container col-12">
                <div className="container-flex">
                    <div className="box-flex">
                        <h2 className="title">Wystarczą 4 proste kroki</h2>
                        <Deco />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Steps;