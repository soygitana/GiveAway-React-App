import React from "react";
import "../styles/main.scss";

import Deco from './Deco.jsx';

const HomeSteps = () => (
    <section id="steps">

        <div className="container-flex">
            <div className="box-flex">
                <h2 className="title">Wystarczą 4 proste kroki</h2>
                <Deco />
            </div>
        </div>

    </section>
);


export default HomeSteps;