import * as React from 'react'

import './style.scss'

interface INoDataProps {
    text: string
}

const NoData: React.SFC<INoDataProps> = ({ text }) => (
    <div className="no-data">{text}</div>
)

export default NoData
