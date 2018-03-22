import * as React from 'react'

import './style.scss'

const Routine: React.SFC<{}> = ({children}) => (
    <div className="routines">
        {children}
    </div>
)

export default Routine
