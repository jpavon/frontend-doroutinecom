import React from 'react'

import env from 'env'

import logo from 'media/logo.svg'

import './style.css'

const Footer = () => (
    <div className="footer">
        <div className="container">
            <a className="footer-item" href={env.HOME_URL}>Home</a>
            <a className="footer-item" href="mailto:hello@doroutine.com">Support: hello@doroutine.com</a>
            <br /><br /><br /><br />
            <img src={logo} alt="doroutine logo" /><br />
            <span className="footer-item">doroutine 2018</span>
        </div>
    </div>
)

export default Footer
