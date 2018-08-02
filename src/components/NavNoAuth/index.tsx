import * as React from 'react'

import LogoFullSvg from 'media/logo-full.svg'

import { NavNoAuthLink, NavNoAuthLinks, NavNoAuthLogo } from './style'

const NavNoAuth: React.SFC<{}> = () => (
    <nav>
        <NavNoAuthLogo>
            <LogoFullSvg />
        </NavNoAuthLogo>
        <NavNoAuthLinks>
            <NavNoAuthLink to="/login" activeClassName="active">
                Log In
            </NavNoAuthLink>
            <NavNoAuthLink to="/register" activeClassName="active">
                Sign In
            </NavNoAuthLink>
        </NavNoAuthLinks>
    </nav>
)

export default NavNoAuth
