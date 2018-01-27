import React from 'react'
import { Link } from 'react-router-dom'

const Routine = ({routine}) => (
    <Link to={`/r/${routine.slug}`} className="routine">
        <h2>{routine.name || 'No routine name set.'}</h2>
    </Link>
)

export default Routine
