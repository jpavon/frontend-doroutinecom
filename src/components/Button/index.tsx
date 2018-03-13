import * as React from 'react'
import * as classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.css'

const removeIcon = require('media/x.svg')

interface IProps {
    href?: string
    to?: string | null
    className?: string
    children: React.ReactNode

    danger?: boolean
    remove?: boolean

    // rest
    type?: string
    // tslint:disable-next-line
    onClick?: (e: any) => void
}

class Button extends React.Component<IProps> {

    render() {
        const {
            to,
            href,
            className,
            children,
            danger,
            remove,
            ...rest
        } = this.props

        const Element = to ? Link : href ? 'a' : 'button'

        return (
            <Element
                className={classNames(
                    'button',
                    danger && 'button--danger',
                    className
                )}
                href={href}
                to={to}
                {...rest}
            >
                {remove && <img src={removeIcon} alt="Remove" />}

                {children}
            </Element>
        )
    }
}

export default Button
