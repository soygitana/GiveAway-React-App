import React, { Component } from "react";
import "../styles/main.scss";


import Hero from './homeheader.jsx';
import HomeColumns from './homethreecolumns.jsx';
import Steps from './homesteps.jsx';
import ToDo from './hometodo.jsx';
import Button from './homebutton.jsx';



class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <HomeColumns />
                <Steps />
                <ToDo />
                <Button />
            </>
        )
    }
}

export default Home;