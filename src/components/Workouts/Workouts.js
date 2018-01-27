import React from 'react'
import Button from 'components/Button'
import Transition from 'components/Transition'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import './style.css'

const Workouts = ({children, create}) => (
    <div className="workouts-container">
        <div className="workouts">
            {children}
        </div>

        <div className="workouts-button-create">
            <Button
                onClick={create}
            >
                New Workout
            </Button>
        </div>

    </div>
)

export default Workouts
