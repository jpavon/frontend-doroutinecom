import React from 'react'

import ListItem from 'components/ListItem'

const Routine = ({routine}) => (
    <ListItem to={`/routines/${routine.id}`} className="routines-routine">
        {routine.name || 'No routine name set.'}
    </ListItem>
)

export default Routine
