import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


import LoginPanel from './LoginPanel.jsx';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'
import NotFound from './NotFound.jsx'

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