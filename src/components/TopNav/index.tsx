import * as React from 'react'
import * as classNames from 'classnames'

import Button from 'components/Button'

import './style.css'

const arrowLeftIcon = require('media/arrow-left.svg')

interface ButtonType {
    to?: string
    className?: string
    onClick?: (e: React.FormEvent<HTMLInputElement>) => void
    danger?: boolean
    disabled?: boolean
}

interface Props {
    title?: string | React.ReactNode
    leftLabel?: string
    rightLabel?: string
    left?: ButtonType
    right?: ButtonType
}

const TopNav = ({title, leftLabel = 'Back', rightLabel = 'Edit', left, right}: Props) => (
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
