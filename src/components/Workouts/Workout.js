import React from 'react'
import classNames from 'classnames'

import Form from 'components/Workouts/Form'
import ButtonIcon from 'components/ButtonIcon'

const Workout = ({children, workout, updateWorkout, removeWorkout}) => (
    <div className="workouts-column">
        <div className="workout">
            <Form
                data={workout}
                update={updateWorkout}
            />

            {children}

            <div className="workout-button-remove">
                <ButtonIcon
                    remove
                    danger
                    onClick={() => removeWorkout(workout.id)}
                />
            </div>
        </div>
    </div>
)

export default Workout
