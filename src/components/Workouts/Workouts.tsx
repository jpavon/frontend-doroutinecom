import * as React from 'react'

import './style.css'

interface IProps {
    children: React.ReactNode
}

const Workouts = ({children}: IProps) => (
    <div className="workouts">
        {children}
    </div>
)

export default Workouts
