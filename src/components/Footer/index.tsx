import * as React from 'react'

import LogoFullSvg from 'media/logo-full.svg'

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
            <LogoFullSvg />
            <br />
        </div>
    </footer>
)

export default Footer
