import React, { Component } from "react";
import "../../styles/main.scss";

import Deco from './deco.jsx';

class HomeSteps extends Component {
    render() {
        return (
            <section id="steps">
            <div className="app-container col-12">
                <div className="container-flex">
                    <div className="box-flex">
                        <h2 className="title">Wystarczą 4 proste kroki</h2>
                        <Deco />
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default HomeSteps;