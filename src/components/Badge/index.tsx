import * as React from 'react'

import './style.scss'

interface IProps {
    value: number
}

const Badge: React.SFC<IProps> = ({ value }) => (
    <div className="badge">{value}</div>
)

export default Badge
