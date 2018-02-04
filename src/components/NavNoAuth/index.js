import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from 'media/logo-full.svg'

import './style.css'

const NavNoAuth = () => (
    <nav className="nav-no-auth">
        <div className="nav-no-auth-logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-no-auth-links">
            <NavLink to="/login" className="nav-no-auth-link" activeClassName="nav-no-auth-link--active">
                Login
            </NavLink>
            <NavLink to="/register" className="nav-no-auth-link" activeClassName="nav-no-auth-link--active">
                Register
            </NavLink>
        </div>
    </nav>
)

export default NavNoAuth
