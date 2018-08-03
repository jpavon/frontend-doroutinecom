import * as React from 'react'

import { TopNav, TopNavTitle, TopNavLeft, TopNavRight } from './style'

interface Props {
    title?: React.ReactNode
    leftButton?: React.ReactNode
    rightButton?: React.ReactNode
}

const NavBar: React.SFC<Props> = (props) => {
    return (
        <TopNav noTitle={!props.title}>
            {props.leftButton && <TopNavLeft>{props.leftButton}</TopNavLeft>}
            {props.title && <TopNavTitle>{props.title}</TopNavTitle>}
            {props.rightButton && (
                <TopNavRight>{props.rightButton}</TopNavRight>
            )}
        </TopNav>
    )
}

export default NavBar
