import * as React from 'react'
import { LinkProps } from 'react-router-dom'

import { Button as StyledButton, AnchorButton, LinkButton } from './style'

import XSvg from 'media/x.svg'
import ArrowLeftSvg from 'media/arrow-left.svg'

interface ExtraProps {
    disabled?: boolean
    danger?: boolean
    icon?: 'back' | 'remove'
}

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = LinkProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>

type Props = AnchorProps & ButtonProps & ExtraProps

// todo: separate Button into ButtonLink and ButtonAnchor
const Button: React.SFC<Partial<Props>> = (props) => {
    const { icon, children, ...rest } = props

    const Element = props.to
        ? LinkButton
        : props.href
            ? AnchorButton
            : StyledButton

    return (
        <Element {...rest}>
            {icon === 'remove' && <XSvg />}
            {icon === 'back' && <ArrowLeftSvg />}

            {children}
        </Element>
    )
}

export default Button
