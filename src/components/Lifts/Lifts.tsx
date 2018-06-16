import * as React from 'react'

import './style.scss'

const Lifts: React.SFC<{}> = (props) => (
    <div className="lifts">{props.children}</div>
)

export default Lifts
