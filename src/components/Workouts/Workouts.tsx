import * as React from 'react'

import './style.scss'

const Workouts: React.SFC<{}> = ({children}) => (
    <div className="workouts">
        {children}
    </div>
)

export default Workouts
