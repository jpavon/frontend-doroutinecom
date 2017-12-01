import React from 'react'

import Form from 'components/Workouts/Form'
import Button from 'components/Button'

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
        </div>
        <Button danger onClick={() => removeWorkout(workout.id)}>Remove workout</Button>
    </div>
)

export default Workout
