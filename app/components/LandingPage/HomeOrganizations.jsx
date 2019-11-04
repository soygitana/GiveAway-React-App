import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import Deco from '../LandingPage/Deco.jsx';


class FundationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            offset: 0,
            perPage: 3,
            currentPage: 0,
        }
    };

    // limit - 3
    // offset - limit * page - perPage * currentPage

    loadFundationsFromServer() {
        fetch("http://localhost:3000/fundations")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    pageCount: Math.ceil(json.length / this.state.perPage)
                })
            });
    }
    componentDidMount() {
        this.loadFundationsFromServer();
    };

    handlePageClick = items => {
        let selected = items.selected;
        console.log(items)
        let offset = Math.ceil(selected * 3);

        this.setState({
            offset,
            currentPage: selected
        });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div className="loading">loading...</div>
        } else {
            console.log(items);
            return (

                <div>
                    <div className="container-flex container-flex-organization organization">
                        <div className="box-flex">
                            {items.slice(this.state.offset, this.state.offset + 3).map(item => (
                                <li className="list-el" key={item.id}>
                                    <p className="title">{item.name}</p>
                                    <p className="text">{item.goal}</p>
                                    <p className="textSecondary">{item.things}</p>
                                </li>
                            ))}

                            <ReactPaginate
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            ></ReactPaginate>
                        </div>
                    </div>
                </div>
            )
        }
    }
}



class OrganizationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            offset: 0,
            perPage: 3,
            currentPage: 0,
        }
    };

    loadOrganizationsFromServer() {
        fetch("http://localhost:3000/organizations")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    pageCount: Math.ceil(json.length / this.state.perPage)
                })
            });
    };


    componentDidMount() {
        this.loadOrganizationsFromServer();
    };

    handlePageClick = items => {
        let selected = items.selected;
        console.log(items)
        let offset = Math.ceil(selected * 3);

        this.setState({
            offset,
            currentPage: selected
        });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div className="loading">loading...</div>
        } else {
            console.log(items);
            return (

                <div>
                    <div className="container-flex container-flex-organization organization">
                        <div className="box-flex">
                            {items.slice(this.state.offset, this.state.offset + 3).map(item => (
                                <li className="list-el" key={item.id}>
                                    <div className="list-el-about">
                                        <p className="title">{item.name}</p>
                                        <p className="text">{item.goal}</p>
                                        <p className="textSecondary">{item.things}</p>
                                    </div>
                                </li>
                            ))}

                            <ReactPaginate
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            ></ReactPaginate>
                        </div>
                    </div>
                </div>
            )
        }
    }
}



class LocalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    };

    componentDidMount() {

        fetch("http://localhost:3000/local")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div className="loading">loading...</div>
        } else {

            return (

                <div>
                    <div className="container-flex container-flex-organization organization">
                        <div className="box-flex">
                            {items.map(item => (
                                <li className="list-el" key={item.id}>
                                    <div className="list-el-about">
                                        <p className="title">{item.name}</p>
                                        <p className="text">{item.goal}</p>
                                        <p className="textSecondary">{item.things}</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}



class HomeOrganizations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 1
        }
        this.handleFundationsClick = this.handleFundationsClick.bind(this);
        this.handleOrganizationsClick = this.handleOrganizationsClick.bind(this);
        this.handleLocalClick = this.handleLocalClick.bind(this)

    }
    handleFundationsClick() {
        this.setState({
            show: 1
        })
    }

    handleOrganizationsClick() {
        this.setState({
            show: 2
        })
    }

    handleLocalClick() {
        this.setState({
            show: 3
        })
    }

    render() {
        let showList;

        if (this.state.show === 1) {
            showList = <FundationList />
        } if (this.state.show === 2) {
            showList = <OrganizationsList />
        } if (this.state.show === 3) {
            showList = <LocalList />
        }

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
                                <button className="text-box" onClick={this.handleFundationsClick}>Fundacjom</button>
                                <button className="text-box" onClick={this.handleOrganizationsClick}>Organizacjom pozarządowym</button>
                                <button className="text-box" onClick={this.handleLocalClick}>Lokalnym zbiórkom</button>
                            </div>
                        </div>
                        <div className="container-flex container-flex-text">
                            <div className="box-flex">
                                <p className="text">Venice gnarly ollie hole aerial slap maxwell regular footed downhill bone air. Coper rock and roll front foot impossible. Thrasher trucks. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="slider-list">
                            <ul className="slider-list-elements" ref="list">
                                {showList}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}




export default HomeOrganizations;