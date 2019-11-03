import React, { Component } from "react";

class Column extends Component {
    render() {
        const img = this.props.img
        const alt = this.props.alt
        const title = this.props.title
        const text = this.props.text
        return (
            <div className="box-flex">
                <img className="img-fluid" src={img} alt={alt} />
                <p className="title">{title}</p>
                <p className="text">{text}</p>
            </div>
        )
    }
}

class HomeToDo extends Component {
    render() {
        return (
            <div className="to-do">
                <div className="app-container">
                    <div className="container-flex">
                        <Column img="./assets/Icon-1.svg" alt="icon" title="Wybierz rzeczy" text="ubrania, zabawki, sprzęt i inne" />
                        <Column img="./assets/Icon-2.svg" alt="icon" title="Spakuj je" text="skorzystaj z worków na śmieci" />
                        <Column img="./assets/Icon-3.svg" alt="icon" title="Zdecyduj komu chcesz pomóc" text="wybierz zaufane miejsce" />
                        <Column img="./assets/Icon-4.svg" alt="icon" title="Zamów kuriera" text="kurier przydzie w dogodnym terminie" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeToDo;