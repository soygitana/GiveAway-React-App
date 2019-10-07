import React, { Component } from "react";
import "../styles/main.scss";



class Box extends Component {
    render() {
        const num = this.props.num
        const title = this.props.title
        const text = this.props.text
        return (
            <div className="box-flex">
                <h2 className="number">{num}</h2>
                <p className="title">{title}</p>
                <p className="text">{text}</p>
            </div>
        )
    }
}



class HomeColumns extends Component {
    render() {
        return (
            <>
                <div className="home-columns">
                    <div className="app-container col-12">

                        <div className="container-flex">
                            <Box num="10" title="oddanych worków" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et vestibulum dui. Etiam viverra metus quam, sit amet luctus lacus ullamcorper." />
                            <Box num="5" title="wspartych organizacji" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et vestibulum dui. Etiam viverra metus quam, sit amet luctus lacus ullamcorper." />
                            <Box num="7" title="zorganizowanych zbiórek" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et vestibulum dui. Etiam viverra metus quam, sit amet luctus lacus ullamcorper." />
                        </div>


                    </div>
                </div>
            </>
        )
    }
}

export default HomeColumns;