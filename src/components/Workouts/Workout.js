import React from 'react'

import ListItem from 'components/ListItem'

const Workout = ({children, workout, routineId}) => (
    <ListItem to={`/routines/${routineId}/workouts/${workout.id}/edit`} className="workout">
        {workout.name || 'No workout name set.'}
    </ListItem>
)

export default Workout
