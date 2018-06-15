import * as React from 'react'
import * as classNames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'
import { omit } from 'lodash'

import './style.scss'

import removeIcon from 'media/x.svg'

interface IExtraProps {
    disabled?: boolean
    danger?: boolean
    remove?: boolean
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
        const { className, danger, remove, children } = this.props
        // omit used props
        const rest = omit(
            this.props,
            'className',
            'danger',
            'remove',
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
                {remove && <img src={removeIcon} alt="Remove" />}

                {children}
            </Element>
        )
    }
}

export default Button
