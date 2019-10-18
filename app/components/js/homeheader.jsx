import React, { Component } from "react";
import "../../styles/main.scss";


import Deco from './deco.jsx';
import Textbox from './TextBox.jsx';


class Hero extends Component {
    render() {
        return (
            <>
                <div className="hero">
                    <div className="app-container col-12">
                        <div className="container-flex">
                            <div className="box-flex"></div>
                            <div className="box-flex">
                                <h1 className="title">Zacznij pomagać! <br />
                                    Oddaj niechciane rzeczy w zaufane ręce
                                </h1>
                                <Deco />
                                <div className="text-boxes">
                                    <Textbox text="oddaj rzeczy" />
                                    <Textbox text="zorganizuj zbiórkę" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Hero;