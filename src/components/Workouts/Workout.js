import React from 'react'

import ListItem from 'components/ListItem'

const Workout = ({children, workout}) => (
    <ListItem to={`/workouts/${workout.id}`} className="workouts-workout">
        {workout.day &&
            <div className="workouts-workout-day">
                {workout.day}
            </div>
        }
        <div className="workouts-workout-name">
            {workout.name || 'No workout name set.'}
        </div>
    </ListItem>
)

export default Workout
