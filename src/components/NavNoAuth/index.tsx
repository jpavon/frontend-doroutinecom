import * as React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('media/logo-full.svg')

import './style.scss'

const NavNoAuth: React.SFC<{}> = () => (
    <nav className="nav-no-auth">
        <div className="nav-no-auth-logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-no-auth-links">
            <NavLink to="/login" className="nav-no-auth-link" activeClassName="nav-no-auth-link--active">
                Log In
            </NavLink>
            <NavLink to="/register" className="nav-no-auth-link" activeClassName="nav-no-auth-link--active">
                Sign In
            </NavLink>
        </div>
    </nav>
)

export default NavNoAuth
