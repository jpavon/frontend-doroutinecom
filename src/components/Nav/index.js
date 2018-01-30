import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import logo from 'media/logo.svg'
import profileIcon from 'media/profile.svg'
import routinesIcon from 'media/routines.svg'
import liftsIcon from 'media/lifts.svg'
import settingsIcon from 'media/settings.svg'
import loginIcon from 'media/login.svg'
import registerIcon from 'media/register.svg'

import './style.css'

const Nav = ({isAuth = false, renderItems = null, isTouchDevice}) => (
    <nav className={classNames(
            'nav-container',
            isTouchDevice && 'nav-container--touch'
        )}
    >
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
                                    <NavLink to="/workouts" className="nav-link" activeClassName="nav-link--active">
                                        <img src={profileIcon} alt="Workouts" />
                                        <span>Workouts</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/routines" className="nav-link" activeClassName="nav-link--active">
                                        <img src={routinesIcon} alt="Routines" />
                                        <span>Routines</span>
                                    </NavLink>
                                </li>
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
                                        <img src={loginIcon} alt="Login" />
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" activeClassName="nav-link--active">
                                        <img src={registerIcon} alt="Register" />
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
