import * as React from 'react'

import { NoData as StyledNoData } from './style'

interface INoDataProps {
    text: string
}

const NoData: React.SFC<INoDataProps> = (props) => (
    <StyledNoData>{props.text}</StyledNoData>
)

export default NoData
