import * as React from 'react'

import { IWorkout } from 'data/workouts/types'

import ListItem from 'components/ListItem'

interface IProps {
    workout: IWorkout
    liftNames: string[]
    day: string | null
    displayName: string | null
}

const Workout: React.SFC<IProps> = (props) => (
    <ListItem
        to={`/workouts/${props.workout.id}`}
        className="workouts-workout"
        info={props.liftNames}
    >
        {props.day && <div className="workouts-workout-day">{props.day}</div>}
        <div className="workouts-workout-name">{props.displayName}</div>
    </ListItem>
)

export default Workout
