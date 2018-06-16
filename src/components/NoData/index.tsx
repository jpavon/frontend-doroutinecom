import * as React from 'react'

import './style.scss'

interface INoDataProps {
    text: string
}

const NoData: React.SFC<INoDataProps> = (props) => (
    <div className="no-data">{props.text}</div>
)

export default NoData
