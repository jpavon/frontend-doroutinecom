import React, { Fragment } from 'react'

import history from 'utils/history'
import Button from 'components/Button'

import arrowLeftIcon  from 'media/arrow-left.svg'

import './style.css'

const TopNav = ({title, leftLabel, rightLabel, left, right}) => (
    <div className="top-nav">
        {left &&
            <Button {...left} className="top-nav-left">
                <img src={arrowLeftIcon} alt="Back" />
                {leftLabel || 'Back'}
            </Button>
        }
        <h1 className="top-nav-title">
            {title}
        </h1>
        {right &&
            <Button {...right} className="top-nav-right">
                {rightLabel || 'Edit'}
            </Button>
        }
    </div>
)

export default TopNav
