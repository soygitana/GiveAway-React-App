import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './deco.jsx';



class About extends Component {
    render() {
        return (
            <>
                <div id='about' className="about">
                    <div className="col-12">
                        <div className="container-flex">
                            <div className="box-flex">
                            <h2 className="title">O nas</h2> 
                            <Deco />
                            <p className="text">Venice gnarly ollie hole aerial slap maxwell regular footed downhill bone air. Coper rock and roll front foot impossible. Thrasher trucks.</p>
                            <img className="img-fluid signature" src="./assets/Signature.svg" alt="signature"></img>   
                            </div>     
                            <div className="box-flex">
                           <img className="img-fluid" src="./assets/People.jpg" alt="people"></img>          
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;