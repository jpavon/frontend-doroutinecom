import React, { Fragment } from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Exercises = ({children, create, workoutId}) => (
    <Fragment>
        <div className="exercises-edit">
            <Transition className="exercise-edit">
                {children}
            </Transition>
        </div>
        <div className="exercises-edit-button-create">
            <Button
                onClick={() => create(workoutId)}
            >
                Add Exercise
            </Button>
        </div>
    </Fragment>
)

export default Exercises
