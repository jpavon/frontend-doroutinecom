import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'

import arrowLeftIcon  from 'media/arrow-left.svg'

import './style.css'

const TopNav = ({title, leftLabel, rightLabel, left, right}) => (
    <div className={classNames(
            'top-nav',
            !title && 'top-nav--no-title'
        )}
    >
        {left &&
            <Button {...left} className={`top-nav-left ${left.className}`}>
                <img src={arrowLeftIcon} alt="Back" />
                {leftLabel || 'Back'}
            </Button>
        }
        {title &&
            <h1 className="top-nav-title">
                {title}
            </h1>
        }
        {right &&
            <Button {...right} className={`top-nav-right ${right.className}`}>
                {rightLabel || 'Edit'}
            </Button>
        }
    </div>
)

export default TopNav
