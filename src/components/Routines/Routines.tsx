import * as React from 'react'

import './style.scss'

const Routine: React.SFC<{}> = (props) => (
    <div className="routines">{props.children}</div>
)

export default Routine
