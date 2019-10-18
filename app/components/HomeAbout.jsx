import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './Deco.jsx';

class HomeAbout extends Component {
    render() {
        return (
            <>
                <section id="about" className="home-about">

                    <div className="container-flex">
                        <div className="box-flex col-sm-12">
                            <h2 className="title">O nas</h2>
                            <Deco />
                            <p className="text">Venice gnarly ollie hole aerial slap maxwell regular footed downhill bone air. Coper rock and roll front foot impossible. Thrasher trucks.</p>
                            <img className="img-fluid img-signature" src="./assets/Signature.svg" alt="signature"></img>
                        </div>
                        <div className="box-flex col-sm-12">
                            <img className="img-people" src="./assets/People.jpg" alt="people"></img>
                        </div>
                    </div>

                </section>
            </>
        )
    }
}

export default HomeAbout;