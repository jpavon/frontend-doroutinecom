import * as React from 'react'

import { BadgeWrapper } from './style'

interface IProps {
    value: number
}

const Badge: React.SFC<IProps> = (props) => (
    <BadgeWrapper>{props.value}</BadgeWrapper>
)

export default Badge
