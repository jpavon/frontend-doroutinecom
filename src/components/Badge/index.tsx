import * as React from 'react'

import './style.scss'

interface IProps {
    value: number
}

const Badge: React.SFC<IProps> = (props) => (
    <div className="badge">{props.value}</div>
)

export default Badge
