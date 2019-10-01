import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <>
                <h1>Holla Paula!</h1>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)