import * as React from 'react'
import * as classNames from 'classnames'

import tickIcon from 'media/tick.svg'

import './style.scss'

export interface ICheckboxProps {
    id: string
    name: string
    checked?: boolean
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    title?: string
}

const Checkbox: React.SFC<ICheckboxProps> = (props) => {

    const {
        id,
        name,
        className,
        checked,
        onChange
    } = props

    return (
        <>
            <span
                className={classNames(
                    'checkbox-tick',
                    checked && 'checkbox-tick--checked'
                )}
            >
                {checked && <img src={tickIcon} alt="Checkbox" />}
            </span>
            <input
                id={id}
                name={name}
                checked={checked}
                type="checkbox"
                className={classNames(
                    'checkbox',
                    className
                )}
                onChange={onChange}
            />
        </>
    )
}

export default Checkbox
