import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './Deco.jsx';
import Textbox from './TextBox.jsx';

class Hero extends Component {
    render() {
        return (
            <>
                <section id="hero" className="hero">
                    <div className="app-container">

                        <div className="container-flex">
                            <div className="box-flex"></div>
                            <div className="box-flex">
                                <h1 className="title">Zacznij pomagać! <br />
                                    Oddaj niechciane rzeczy w zaufane ręce
                                </h1>
                                <Deco />
                                <div className="text-boxes">
                                    <Textbox link="./login" text="oddaj rzeczy" />
                                    <Textbox link="./login" text="zorganizuj zbiórkę" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Hero;