import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from 'img/logo.svg'

import './style.css'

class Nav extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt="Logo"/>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/workouts">
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link to="/lifts">
                                Lifts
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Nav;
