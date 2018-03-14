import * as React from 'react'

import './style.css'

interface IProps {
    children: React.ReactNode
}

const Workouts: React.SFC<IProps> = ({children}) => (
    <div className="workouts">
        {children}
    </div>
)

export default Workouts
