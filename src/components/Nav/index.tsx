import * as React from 'react'
import { NavLink } from 'react-router-dom'
import * as classNames from 'classnames'
import { RouteComponentProps } from 'react-router'

import LogoSvg from 'media/logo.svg'
import ProfileSvg from 'media/profile.svg'
import WorkoutsSvg from 'media/workouts.svg'
import RoutinesSvg from 'media/routines.svg'
import LiftsSvg from 'media/lifts.svg'

import './style.scss'

const isProfileActive = (
    match: RouteComponentProps<{}>['match'],
    location: RouteComponentProps<{}>['location']
) => {
    if (match) {
        return true
    }
    if (location.pathname === '/settings') {
        return true
    }
    return false
}

interface INavProps {
    isTouchDevice: boolean
    isPendingWorkouts: boolean
}

const Nav: React.SFC<INavProps> = (props) => (
    <nav
        className={classNames(
            'nav-container',
            props.isTouchDevice && 'nav-container--touch'
        )}
    >
        <div className="nav">
            <NavLink
                to="/"
                className="nav-logo"
                activeClassName="nav-link--active"
            >
                <LogoSvg />
            </NavLink>

            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        exact={true}
                        to="/"
                        className="nav-link"
                        activeClassName="nav-link--active"
                        isActive={isProfileActive}
                    >
                        <ProfileSvg />
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/workouts"
                        className="nav-link"
                        activeClassName="nav-link--active"
                    >
                        {props.isPendingWorkouts && (
                            <div className="nav-link-highlight" />
                        )}
                        <WorkoutsSvg />
                        <span>Workouts</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/routines"
                        className="nav-link"
                        activeClassName="nav-link--active"
                    >
                        <RoutinesSvg />
                        <span>Routines</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/lifts"
                        className="nav-link"
                        activeClassName="nav-link--active"
                    >
                        <LiftsSvg />
                        Lifts
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav
