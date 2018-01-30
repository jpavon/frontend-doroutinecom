import React from 'react'

import ListItem from 'components/ListItem'

const Workout = ({children, workout}) => (
    <ListItem to={`/workouts/${workout.id}`} className="workout">
        {workout.name || 'No workout name set.'}
    </ListItem>
)

export default Workout
