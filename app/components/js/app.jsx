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


import LoginNav from './LoginNav.jsx';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import SignIn from './SignIn.jsx'
import Login from './Login.jsx'
import NotFound from './NotFound.jsx'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <LoginNav />
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/login' component={Login} />
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