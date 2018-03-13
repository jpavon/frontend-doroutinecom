import * as React from 'react'

import './style.css'

interface IProps {
    value: number
}

const Badge = ({value}: IProps) => (
    <div className="badge">
        {value}
    </div>
)

export default Badge
