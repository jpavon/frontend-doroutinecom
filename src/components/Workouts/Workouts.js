import React, { Fragment } from 'react'

import Button from 'components/Button'
import Transition from 'components/Transition'

import './style.css'

const Workouts = ({children, create}) => (
    <Fragment>
        <div className="workouts">
            {children}
        </div>
    </Fragment>
)

export default Workouts
