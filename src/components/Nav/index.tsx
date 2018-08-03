import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import LogoSvg from 'media/logo.svg'
import ProfileSvg from 'media/profile.svg'
import WorkoutsSvg from 'media/workouts.svg'
import RoutinesSvg from 'media/routines.svg'
import LiftsSvg from 'media/lifts.svg'

import {
    NavContainer,
    Nav as StyledNav,
    NavItem,
    NavLink,
    NavLinkHighlight,
    NavList,
    NavLogo
} from './style'

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

interface NavProps {
    isTouchDevice: boolean
    isPendingWorkouts: boolean
}

const Nav: React.SFC<NavProps> = (props) => (
    <NavContainer>
        <StyledNav>
            <NavLogo to="/" activeClassName="active">
                <LogoSvg />
            </NavLogo>

            <NavList>
                <NavItem>
                    <NavLink
                        exact={true}
                        to="/"
                        activeClassName="active"
                        isActive={isProfileActive}
                    >
                        <ProfileSvg />
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/workouts" activeClassName="active">
                        {props.isPendingWorkouts && <NavLinkHighlight />}
                        <WorkoutsSvg />
                        <span>Workouts</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/routines" activeClassName="active">
                        <RoutinesSvg />
                        <span>Routines</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/lifts" activeClassName="active">
                        <LiftsSvg />
                        Lifts
                    </NavLink>
                </NavItem>
            </NavList>
        </StyledNav>
    </NavContainer>
)

export default Nav
