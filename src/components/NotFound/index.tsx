import * as React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import './style.scss'

const NotFound: React.SFC<{}> = () => (
    <>
        <Helmet>
            <title>404 - Not Found</title>
        </Helmet>
        <div className="not-found">
            <div className="not-found-title">Page not found.</div>
            <p>Try using the navigation above or going to the <Link to="/">homepage</Link>.</p>
        </div>
    </>
)

export default NotFound
