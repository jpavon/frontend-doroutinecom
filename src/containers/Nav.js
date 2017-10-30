import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h1>Nav here.</h1>
                <Link to="/">
                    Home
                </Link>
            </div>
        );
    }
}

export default Nav;
