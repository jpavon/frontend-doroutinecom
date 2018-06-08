import * as React from 'react'

import { IFormatedWorkout } from 'data/workouts/types'

import ListItem from 'components/ListItem'

interface IProps {
    workout: IFormatedWorkout
}

const Workout: React.SFC<IProps> = ({ workout }) => (
    <ListItem
        to={`/workouts/${workout.id}`}
        className="workouts-workout"
        info={workout.liftNames}
    >
        {workout.day && (
            <div className="workouts-workout-day">{workout.day}</div>
        )}
        <div className="workouts-workout-name">
            {workout.displayName || 'No workout name set.'}
        </div>
    </ListItem>
)

export default Workout
