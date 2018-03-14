import * as React from 'react'

import './style.css'

const Routine: React.SFC<{}> = ({children}) => (
    <div className="routines">
        {children}
    </div>
)

export default Routine
