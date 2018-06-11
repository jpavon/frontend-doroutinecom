import * as React from 'react'

import { ILift } from 'data/lifts/types'

import ListItem from 'components/ListItem'

interface IProps {
    lift: ILift
}

const Routine: React.SFC<IProps> = ({ lift }) => (
    <ListItem to={`/lifts/${lift.id}`} className="lifts-lift">
        {lift.name || 'No lift name set.'}
    </ListItem>
)

export default Routine
