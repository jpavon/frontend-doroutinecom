import React from 'react'

import ListItem from 'components/ListItem'

const Routine = ({lift}) => (
    <ListItem to={`/lifts/${lift.id}`} className="lift">
        {lift.name || 'No lift name set.'}
    </ListItem>
)

export default Routine
