import * as React from 'react'

import './style.scss'

interface Props {}

const GraphEmpty: React.SFC<Props> = (props) => (
    <div className="graph-empty">
        Complete a workout with this lift to start tracking your progress.
    </div>
)

export default GraphEmpty
