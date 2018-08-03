import * as React from 'react'

import { BadgeWrapper } from './style'

interface Props {
    value: number
}

const Badge: React.SFC<Props> = (props) => (
    <BadgeWrapper>{props.value}</BadgeWrapper>
)

export default Badge
