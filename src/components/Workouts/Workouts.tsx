import React from 'react'

import './style.css'

interface IWorkouts {
    children: React.ReactNode
}

const Workouts = ({children}: IWorkouts) => (
    <div className="workouts">
        {children}
    </div>
)

export default Workouts
