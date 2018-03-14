import * as React from 'react'

import './style.css'

const Lifts: React.SFC<{}> = ({children}) => (
    <div className="lifts">
        {children}
    </div>
)

export default Lifts
