import * as React from 'react'
import * as classNames from 'classnames'

const tickIcon = require('media/tick.svg')

import './style.css'

interface ICheckboxProps {
    name: string
    checked?: boolean
    className?: string
}

const Checkbox: React.SFC<ICheckboxProps> = (props) => {

    const {
        name,
        className,
        ...rest
    } = props

    return (
        <>
            <span
                className={classNames(
                    'checkbox-tick',
                    props.checked && 'checkbox-tick--checked'
                )}
            >
                {props.checked && <img src={tickIcon} alt="Checkbox" />}
            </span>
            <input
                name={name}
                type="checkbox"
                className={classNames(
                    'checkbox',
                    className
                )}
                {...rest}
            />
        </>
    )
}

export default Checkbox
