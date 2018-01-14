import React from 'react'

import env from 'env'

import logo from 'media/logo.svg'

import './style.css'

const Footer = () => (
    <div className="footer">
        <div className="container">
            <a className="footer-link" href={env.HOME_URL}>Home</a>
            <span className="footer-link">Support - <a href="mailto:hello@doroutine.com">hello@doroutine.com</a></span>
            <br /><br /><br /><br />
            <img src={logo} alt="doroutine logo" /><br />
            <span className="footer-item">2018</span>
        </div>
    </div>
)

export default Footer
