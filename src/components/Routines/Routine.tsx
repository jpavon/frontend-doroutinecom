import * as React from 'react'

import { IRoutine } from 'data/routines/types'

import ListItem from 'components/ListItem'

interface IRoutinesProps {
    routine: IRoutine
}

const Routine: React.SFC<IRoutinesProps> = (props) => (
    <ListItem to={`/routines/${props.routine.id}`} className="routines-routine">
        {props.routine.name || 'No routine name set.'}
    </ListItem>
)

export default Routine
