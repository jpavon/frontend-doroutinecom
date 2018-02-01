import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import logo from 'media/logo.svg'
import profileIcon from 'media/profile.svg'
import routinesIcon from 'media/routines.svg'
import liftsIcon from 'media/lifts.svg'
import workoutsIcon from 'media/workouts.svg'
// import loginIcon from 'media/login.svg'
// import registerIcon from 'media/register.svg'

import './style.css'

const isProfileActive = (match, location) => {
    if (match) return true
    if (location.pathname === '/settings') return true
    return false
}

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
                                    <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active" isActive={isProfileActive}>
                                        <img src={profileIcon} alt="Profile" />
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/workouts" className="nav-link" activeClassName="nav-link--active">
                                        <img src={workoutsIcon} alt="Workouts" />
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
                            </Fragment>
                        :
                            <Fragment>
                                <li className="nav-item nav-item--unauth">
                                    <NavLink to="/login" className="nav-link" activeClassName="nav-link--active">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item nav-item--unauth">
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
