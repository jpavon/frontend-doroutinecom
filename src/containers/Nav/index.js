import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to="/" className="nav-logo" activeClassName="nav-link--active">
                        <img src={logo} alt="Logo"/>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/workouts" className="nav-link" activeClassName="nav-link--active">
                                Workouts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lifts" className="nav-link" activeClassName="nav-link--active">
                                Lifts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/graphs" className="nav-link" activeClassName="nav-link--active">
                                Graphs
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Nav;
