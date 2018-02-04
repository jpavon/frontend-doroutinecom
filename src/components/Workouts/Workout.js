import React from 'react'

import ListItem from 'components/ListItem'

const Workout = ({children, workout}) => (
    <ListItem to={`/workouts/${workout.id}`} className="workout">
        {workout.day &&
            <div className="workout-day">
                {workout.day}
            </div>
        }
        <div className="workout-name">
            {workout.name || 'No workout name set.'}
        </div>
        {/*<div className="workout-exercises">
            Bench Press / Flies
        </div>*/}
    </ListItem>
)

export default Workout
