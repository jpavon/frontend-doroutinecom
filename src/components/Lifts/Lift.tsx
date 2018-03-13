import * as React from 'react'

import { IFormatedLift } from 'data/lifts/types'

import ListItem from 'components/ListItem'

interface IProps {
    lift: IFormatedLift
}

const Routine = ({lift}: IProps) => (
    <ListItem to={`/lifts/${lift.id}`} className="lifts-lift">
        {lift.name || 'No lift name set.'}
    </ListItem>
)

export default Routine
