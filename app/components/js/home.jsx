import React, { Component } from "react";
import "../styles/main.scss";

import Hero from './HomeHeader.jsx';
import HomeColumns from './HomeThreeColumns.jsx';
import HomeSteps from './HomeSteps.jsx';
import HomeToDo from './HomeTodo.jsx';
import HomeButton from './HomeButton.jsx';
import HomeAbout from './HomeAbout.jsx';
import HomeOrganizations from './HomeOrganizations.jsx';
import HomeContact from './HomeContact.jsx';

class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <HomeColumns />
                <HomeSteps />
                <HomeToDo />
                <HomeButton />
                <HomeAbout/>
                <HomeOrganizations/>
                <HomeContact/>
            </>
        )
    }
}

export default Home;