import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../styles/main.scss";

import Deco from './Deco.jsx';

class LogOut extends Component {

    render() {
        return (
            <section className="signup">
                <div className="app-container col-12">
                    <div className="container-flex">

                        <h2 className="title">Wylogowanie nastąpiło <br/> 
                        pomyślnie!</h2>
                        <Deco />
                            <div className="container-flex container-btn">
                                <Link className="link" to="/">Strona główna</Link>
                            </div>
                    
                    </div>
                </div>
            </section>
        )
    }
};


export default LogOut;