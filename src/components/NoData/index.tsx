import * as React from 'react'

import { NoData as StyledNoData } from './style'

interface NoDataProps {
    text: string
}

const NoData: React.SFC<NoDataProps> = (props) => (
    <StyledNoData>{props.text}</StyledNoData>
)

export default NoData
