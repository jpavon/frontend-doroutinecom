import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import logo from 'media/logo.svg'

import './style.css'

const Nav = ({isAuth = false, renderItems = null}) => (
    <nav className="nav">
        <NavLink to="/" className="nav-logo" activeClassName="nav-link--active">
            <img src={logo} alt="Logo"/>
        </NavLink>

        <ul className="nav-list">
            {renderItems ||
                (
                    isAuth ?
                        <Fragment>
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
                        </Fragment>
                    :
                        <Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" activeClassName="nav-link--active">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link" activeClassName="nav-link--active">
                                    Register
                                </NavLink>
                            </li>
                        </Fragment>
                )
            }
        </ul>
    </nav>
)

export default Nav
