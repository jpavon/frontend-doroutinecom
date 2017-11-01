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
                <nav className="nav">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="Logo"/>
                    </Link>

                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/workouts" className="nav-link">
                                Workouts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lifts" className="nav-link">
                                Lifts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/graphs" className="nav-link">
                                Graphs
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Nav;
