import React, { Fragment } from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Exercises = ({children, create}) => (
    <Fragment>
        <div className="exercises">
            <Transition className="exercise">
                {children}
            </Transition>
        </div>
        <div className="exercises-button-create">
            <Button
                onClick={create}
            >
                Add Exercise
            </Button>
        </div>
    </Fragment>
)

export default Exercises
