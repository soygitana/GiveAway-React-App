import React, { Component } from "react";
import Textbox from '../LandingPage/TextBox.jsx';

class HomeGiveAway extends Component {
    render() {
        return (
            <section id="giveaway">

                <div className="text-boxes">
                    <Textbox link="/login" text="oddaj rzeczy" />
                </div>

            </section>
        )
    }
}

export default HomeGiveAway;