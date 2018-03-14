import * as React from 'react'
import * as classNames from 'classnames'

import Button from 'components/Button'

import './style.css'

const arrowLeftIcon = require('media/arrow-left.svg')

interface IButtonType {
    to?: string
    className?: string
    onClick?: (e: React.FormEvent<HTMLInputElement>) => void
    danger?: boolean
    disabled?: boolean
}

interface IProps {
    title?: React.ReactNode
    leftLabel?: string
    rightLabel?: string
    left?: IButtonType
    right?: IButtonType
}

const TopNav: React.SFC<IProps> = ({title, leftLabel = 'Back', rightLabel = 'Edit', left, right}) => (
    <div
        className={classNames(
            'top-nav',
            !title && 'top-nav--no-title'
        )}
    >
        {left &&
            <Button {...left} className={`top-nav-left ${left.className}`}>
                <img src={arrowLeftIcon} alt="Back" />
                {leftLabel}
            </Button>
        }
        {title &&
            <h1 className="top-nav-title">
                {title}
            </h1>
        }
        {right &&
            <Button {...right} className={`top-nav-right ${right.className}`}>
                {rightLabel}
            </Button>
        }
    </div>
)

export default TopNav
