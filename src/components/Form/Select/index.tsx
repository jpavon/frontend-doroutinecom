import * as React from 'react'
import * as classNames from 'classnames'

import './style.css'

interface IOption {
    id: string
    name: string
}

interface ISelectProps {
    defaultValue?: string
    value?: string
    name: string
    options: IOption[]
    className: string
    defaultOptionMessage: string
    noOptionsMessage: string
    inputRef: () => void
}

const Select: React.SFC<ISelectProps> = (props) => {

    const {
        name,
        options,
        className,
        inputRef,
        defaultOptionMessage,
        noOptionsMessage,
        ...rest
    } = props

    return (
        <select
            name={name}
            ref={inputRef}
            className={classNames(
                'select',
                (!props.value && !props.defaultValue) && 'select--default-option',
                className,
            )}
            {...rest}
        >
            {(!props.value && !props.defaultValue) && <option>{defaultOptionMessage}</option>}
            {options.length > 0 &&
                options.map((option, i) => (
                    <option key={i} value={option.id}>{option.name}</option>
                ))
            }
        </select>
    )
}

export default Select
