import * as React from 'react'
import * as classNames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'
import { omit } from 'lodash'

import './style.scss'

import XSvg from 'media/x.svg'
import ArrowLeftSvg from 'media/arrow-left.svg'

interface IExtraProps {
    disabled?: boolean
    danger?: boolean
    removeIcon?: boolean
    backIcon?: boolean
}

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    IExtraProps
export type ButtonProps = LinkProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    IExtraProps

type IButtonProps<T> = T extends undefined ? AnchorProps : ButtonProps

interface IOwnButtonProps<T> {
    to?: T
}

class Button<T = undefined> extends React.Component<
    IOwnButtonProps<T> & IButtonProps<T>
> {
    public render() {
        // spread with generics not working https://github.com/Microsoft/TypeScript/issues/10727
        const { className, danger, removeIcon, backIcon, children } = this.props
        // omit used props
        const rest = omit(
            this.props,
            'className',
            'danger',
            'removeIcon',
            'backIcon',
            'children'
        )

        const Element = this.props.to ? Link : this.props.href ? 'a' : 'button'

        return (
            <Element
                className={classNames(
                    'button',
                    danger && 'button--danger',
                    className
                )}
                {...rest}
            >
                {removeIcon && <XSvg />}
                {backIcon && <ArrowLeftSvg />}

                {children}
            </Element>
        )
    }
}

export default Button
