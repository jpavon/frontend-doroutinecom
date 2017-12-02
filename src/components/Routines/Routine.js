import React from 'react'
import { Link } from 'react-router-dom'

const Routine = ({routine}) => (
    <div className="routine">
        <Link to={`/r/${routine.slug}`}>
            <h1>{routine.name || '[No title set]'}</h1>
        </Link>
    </div>
)

export default Routine
