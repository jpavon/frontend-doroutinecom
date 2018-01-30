import React from 'react'

import logoFull from 'media/logo-full.svg'

import './style.css'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-inner">
                <span className="footer-link">Support - <a href="mailto:hello@doroutine.com">hello@doroutine.com</a></span>
                <br /><br />
                <img src={logoFull} alt="doroutine logo" /><br />
            </div>
        </div>
    </footer>
)

export default Footer
