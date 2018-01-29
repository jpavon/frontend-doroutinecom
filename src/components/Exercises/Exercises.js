import React, { Fragment } from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Exercises = ({children}) => (
    <div className="exercises">
        {children}
    </div>
)

export default Exercises
