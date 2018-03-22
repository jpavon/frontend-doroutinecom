import * as React from 'react'

import Button from 'components/Button'

const logo = require('media/logo.svg')

import './style.scss'

const Offline: React.SFC<{}> = () => (
    <div className="offline">
        <div className="offline-logo">
            <img src={logo} alt="Logo" />
        </div>
        <p className="offline-text">
            You need internet connection to continue using doroutine,
            refresh the page when you are connected to the internet.
        </p>
        <div className="offline-button">
            <Button onClick={() => window.location.reload(true)}>Refresh</Button>
        </div>
    </div>
)

export default Offline
