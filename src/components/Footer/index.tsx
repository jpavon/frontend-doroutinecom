import * as React from 'react'

const logoFull = require('media/logo-full.svg')

import './style.css'

const Footer: React.SFC<{}> = () => (
    <footer className="footer">
        <div className="footer-inner">
            <span className="footer-link">Support - <a href="mailto:hello@doroutine.com">hello@doroutine.com</a></span>
            <br /><br />
            <img src={logoFull} alt="doroutine logo" /><br />
        </div>
    </footer>
)

export default Footer
