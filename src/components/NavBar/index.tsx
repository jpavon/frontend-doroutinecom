import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

interface IProps {
    title?: React.ReactNode
    leftButton?: React.ReactNode
    rightButton?: React.ReactNode
}

const NavBar: React.SFC<IProps> = (props) => {
    return (
        <div
            className={classNames(
                'top-nav',
                !props.title && 'top-nav--no-title'
            )}
        >
            {props.leftButton && (
                <div className="top-nav-left">{props.leftButton}</div>
            )}
            {props.title && <h1 className="top-nav-title">{props.title}</h1>}
            {props.rightButton && (
                <div className="top-nav-right">{props.rightButton}</div>
            )}
        </div>
    )
}

export default NavBar
