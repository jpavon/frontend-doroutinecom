import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import logo from 'media/logo.svg'
import profileIcon from 'media/profile.svg'
import routinesIcon from 'media/routines.svg'
import liftsIcon from 'media/lifts.svg'
import workoutsIcon from 'media/workouts.svg'

import './style.css'

const isProfileActive = (match, location) => {
    if (match) return true
    if (location.pathname === '/settings') return true
    return false
}

const Nav = ({isAuth = false, isTouchDevice, isPendingWorkouts}) => (
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
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active" isActive={isProfileActive}>
                        <img src={profileIcon} alt="Profile" />
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/workouts" className="nav-link" activeClassName="nav-link--active">
                        {isPendingWorkouts && <div className="nav-link-highlight"></div>}
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
            </ul>
        </div>
    </nav>
)

export default Nav
