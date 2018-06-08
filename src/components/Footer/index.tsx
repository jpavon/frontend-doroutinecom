import * as React from 'react'

import logoFull from 'media/logo-full.svg'

import './style.scss'

const Footer: React.SFC<{}> = () => (
    <footer className="footer">
        <div className="footer-inner">
            <span className="footer-item">
                Support{' '}
                <a
                    className="button footer-link"
                    href="mailto:hello@doroutine.com"
                >
                    hello@doroutine.com
                </a>
            </span>
            <br />
            <br />
            <img src={logoFull} alt="doroutine logo" />
            <br />
        </div>
    </footer>
)

export default Footer
