import React from 'react'

import ListItem from 'components/ListItem'

const Workout = ({children, workout}) => (
    <ListItem to={`/workouts/${workout.id}`} className="workout">
        {workout.name || 'No workout name set.'}
        <br/>
        <small>Bench Press / Flies</small>
        <br/>
        <small>2nd January / 2h 34min</small>
    </ListItem>
)

export default Workout
