import * as React from 'react'
import * as classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.scss'

const removeIcon = require('media/x.svg')

export interface IButtonProps {
    href?: string
    to?: string | null
    className?: string

    danger?: boolean
    remove?: boolean

    // rest
    type?: string
    disabled?: boolean
    // tslint:disable-next-line
    onClick?: (e: any) => void
    title?: string
}

class Button extends React.Component<IButtonProps> {

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
