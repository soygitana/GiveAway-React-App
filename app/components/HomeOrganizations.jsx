import React, { Component } from "react";
import "../styles/main.scss";

import Deco from './Deco.jsx';
import Textbox from './TextBox.jsx';



class Organization extends Component {
    render() {
        const title = this.props.title
        const text = this.props.text
        const textSecondary = this.props.textSecondary
        return (
            <>
                <div className="container-flex container-flex-organization organization">
                    <div className="box-flex">
                        <h2 className="title">{title}</h2>
                        <p className="text">{text}</p>
                    </div>
                    <div className="box-flex">
                        <p className="textSecondary">{textSecondary}</p>
                    </div>
                </div>
            </>
        )
    }
}


class HomeOrganizations extends Component {
    render() {
        return (
            <>
                <section id="organizations" className="home-organizations">
                    <div className="app-container">

                        <div className="container-flex">
                            <div className="box-flex">
                                <h2 className="title">Komu pomagamy?</h2>
                                <Deco />
                            </div>
                        </div>
                        <div className="text-boxes">
                            <div className="container-flex">
                                <Textbox text="Fundacjom" />
                                <Textbox text="Organizacjom porządkowym" />
                                <Textbox text="Lokalnym zbiórkom" />
                            </div>
                        </div>
                        <div className="container-flex container-flex-text">
                            <div className="box-flex">
                                <p className="text">Venice gnarly ollie hole aerial slap maxwell regular footed downhill bone air. Coper rock and roll front foot impossible. Thrasher trucks. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <Organization title="Organizacja 'Lorem Ipsum 1'" text="Proin varius turpis ut sem porttitor varius." textSecondary="quis, feugiat a, tellus." />
                        <Organization title="Organizacja 'Lorem Ipsum 2'" text="Proin varius turpis ut sem porttitor varius." textSecondary="quis, feugiat a, tellus." />
                        <Organization title="Organizacja 'Lorem Ipsum 3'" text="Proin varius turpis ut sem porttitor varius." textSecondary="quis, feugiat a, tellus." />

                    </div>
                </section>
            </>
        )
    }
}

export default HomeOrganizations;