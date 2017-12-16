import React from 'react'
import { Link } from 'react-router-dom'

const Routine = ({routine}) => (
    <div className="routine">
        <Link to={`/r/${routine.slug}`}>
            <h2 className="routine-title">{routine.name || '[No title set]'}</h2>
        </Link>
    </div>
)

export default Routine
