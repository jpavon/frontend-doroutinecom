import * as React from 'react'
import * as classNames from 'classnames'

import Button, { ButtonProps, AnchorProps } from 'components/Button'

import './style.scss'

import arrowLeftIcon from 'media/arrow-left.svg'

interface IProps {
    title?: React.ReactNode
    leftLabel?: string
    rightLabel?: string
    leftButton?: ButtonProps
    rightButton?: ButtonProps
    leftAnchor?: AnchorProps
    rightAnchor?: AnchorProps
}

const TopNav: React.SFC<IProps> = ({
    title,
    leftLabel = 'Back',
    rightLabel = 'Edit',
    leftButton = null,
    rightButton = null,
    leftAnchor = null,
    rightAnchor = null
}) => {
    const left = leftAnchor || leftButton
    const right = rightAnchor || rightButton

    return (
        <div className={classNames('top-nav', !title && 'top-nav--no-title')}>
            {left && (
                <Button {...left} className={`top-nav-left ${left.className}`}>
                    <img src={arrowLeftIcon} alt="Back" />
                    {leftLabel}
                </Button>
            )}
            {title && <h1 className="top-nav-title">{title}</h1>}
            {right && (
                <Button
                    {...right}
                    className={`top-nav-right ${right.className}`}
                >
                    {rightLabel}
                </Button>
            )}
        </div>
    )
}

export default TopNav
