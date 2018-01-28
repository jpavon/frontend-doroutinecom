import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from 'components/ListItem'

const Routine = ({routine}) => (
    <ListItem to={`/routines/${routine.id}`} className="routine">
        {routine.name || 'No routine name set.'}
    </ListItem>
)

export default Routine
