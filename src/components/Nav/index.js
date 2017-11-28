import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import logo from 'img/logo.svg'

import './style.css'

class Nav extends Component {

    render() {
        return (
            <div>
                <nav className="nav">
                    <NavLink to="/" className="nav-logo" activeClassName="nav-link--active">
                        <img src={logo} alt="Logo"/>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/routines" className="nav-link" activeClassName="nav-link--active">
                                Routines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link" activeClassName="nav-link--active">
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Nav;
