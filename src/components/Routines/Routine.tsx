import * as React from 'react'

import { IFormatedRoutine } from 'data/routines/types'

import ListItem from 'components/ListItem'

interface IRoutinesProps {
    routine: IFormatedRoutine
}

const Routine: React.SFC<IRoutinesProps> = ({routine}) => (
    <ListItem to={`/routines/${routine.id}`} className="routines-routine">
        {routine.name || 'No routine name set.'}
    </ListItem>
)

export default Routine
