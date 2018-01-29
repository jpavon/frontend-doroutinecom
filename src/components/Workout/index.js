import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import AutoSaveForm from 'components/AutoSaveForm'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'

import './style.css'

const WorkoutEdit = ({children, workout, update}) => (
    <div className="workout">
        <div className="workout-name">
            {workout.name}
        </div>

        {children}

        <div className="workout-notes">
            <h2>Additional Notes</h2>
            <p>{workout.notes}</p>
        </div>
    </div>
)

export default WorkoutEdit
