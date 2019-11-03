import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';


import LoginPanel from '../components/LandingPage/LoginPanel.jsx';
import Navigation from '../components/LandingPage/Navigation.jsx';
import Home from '../components/LandingPage/Home.jsx';
import SignUp from '../components/LogIn/SignUp.jsx';
import LogIn from '../components/LogIn/LogIn.jsx';
import LogOut from '../components/LogIn/LogOut.jsx';
import NotFound from '../components/LandingPage/NotFound.jsx'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <LoginPanel />
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={LogIn} />
                    <Route path='/logout' component={LogOut} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)