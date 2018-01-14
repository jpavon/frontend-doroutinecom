import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import './style.css'

const NotFound = () => (
    <Fragment>
        <Helmet>
            <title>404 - Not Found</title>
        </Helmet>
        <div className="no-match">
            <div className="no-match-title">Page not found.</div>
            <p>Try using the navigation above or going to the <Link to="/">homepage</Link>.</p>
        </div>
    </Fragment>
)

export default NotFound
