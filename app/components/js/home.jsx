import React, { Component } from "react";
import "../styles/main.scss";


import Hero from './HomeHeader.jsx';
import HomeColumns from './HomeThreeColumns.jsx';
import Steps from './HomeSteps.jsx';
import ToDo from './HomeTodo.jsx';
import Button from './HomeButton.jsx';
import About from './HomeAbout.jsx';
import Help from './HomeHelp.jsx';
import Contact from './HomeContact.jsx';

class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <HomeColumns />
                <Steps />
                <ToDo />
                <Button />
                <About/>
                <Help/>
                <Contact/>
            </>
        )
    }
}

export default Home;