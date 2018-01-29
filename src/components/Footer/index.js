import React from 'react'

import env from 'env'

import logo from 'media/logo.svg'

import './style.css'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-inner">
                <span className="footer-link">Support - <a href="mailto:hello@doroutine.com">hello@doroutine.com</a></span>
                <br /><br />
                <img src={logo} alt="doroutine logo" /><br />
                <span className="footer-item">doroutine 2018</span>
            </div>
        </div>
    </footer>
)

export default Footer
