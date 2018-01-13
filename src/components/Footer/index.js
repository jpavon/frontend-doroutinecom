import React from 'react'

import env from 'env'

import './style.css'

const Footer = () => (
    <div className="footer">
        <div className="container">
            <a className="footer-item" href={env.HOME_URL}>Home</a>
            <a className="footer-item" href="http://localhost:8001">Support</a>
            <br />
            <br />
            <span className="footer-item">Saveroutine 2018</span>
        </div>
    </div>
)

export default Footer
