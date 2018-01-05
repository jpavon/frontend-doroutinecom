import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const NotFound = () => (
    <div className="no-match">
        <div className="no-match-title">Page not found.</div>
        <p>Try using the navigation above or going to the <Link to="/">homepage</Link>.</p>
    </div>
)

export default NotFound
