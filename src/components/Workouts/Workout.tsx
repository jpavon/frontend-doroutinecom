import * as React from 'react'

import { IFormatedWorkout } from 'data/workouts/types'

import ListItem from 'components/ListItem'

interface IWorkout {
    workout: IFormatedWorkout
}

const Workout = ({workout}: IWorkout) => (
    <ListItem to={`/workouts/${workout.id}`} className="workouts-workout">
        {workout.day &&
            <div className="workouts-workout-day">
                {workout.day}
            </div>
        }
        <div className="workouts-workout-name">
            {workout.displayName || 'No workout name set.'}
        </div>
    </ListItem>
)

export default Workout
