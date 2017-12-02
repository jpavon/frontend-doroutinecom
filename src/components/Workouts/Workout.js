import React from 'react'

import Form from 'components/Workouts/Form'
import ButtonIcon from 'components/ButtonIcon'

const Workout = ({children, workout, updateWorkout, removeWorkout}) => (
    <div className="workouts-column">
        <div className="workout">
            <div className="workout-name">
                <Form
                    data={workout}
                    update={updateWorkout}
                />
            </div>

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
