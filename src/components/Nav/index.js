import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import logo from 'media/logo.svg'
import routinesIcon from 'media/routines.svg'
import newRoutineIcon from 'media/new-routine.svg'
import liftsIcon from 'media/lifts.svg'
import settingsIcon from 'media/settings.svg'

import './style.css'

const Nav = ({isAuth = false, renderItems = null}) => (
    <nav className="nav-container">
        <div className="nav">
            <NavLink to="/" className="nav-logo" activeClassName="nav-link--active">
                <img src={logo} alt="Logo"/>
            </NavLink>

            <ul className="nav-list">
                {renderItems ||
                    (
                        isAuth ?
                            <Fragment>
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">
                                        <img src={routinesIcon} alt="Routines" />
                                        <span>Routines</span>
                                    </NavLink>
                                </li>
                                {/*<li className="nav-item">
                                    <NavLink exact to="/routine/new" className="nav-link" activeClassName="nav-link--active">
                                        <img src={newRoutineIcon} alt="New Routine" />
                                        <span>New Routine</span>
                                    </NavLink>
                                </li>*/}
                                <li className="nav-item">
                                    <NavLink to="/lifts" className="nav-link" activeClassName="nav-link--active">
                                        <img src={liftsIcon} alt="Lifts" />
                                        Lifts
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/settings" className="nav-link" activeClassName="nav-link--active">
                                        <img src={settingsIcon} alt="Settings" />
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
        </div>
    </nav>
)

export default Nav
