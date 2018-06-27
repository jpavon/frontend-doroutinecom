import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

interface IOption {
    id: number | string
    name: string | null
}

export interface ISelectProps
    extends React.InputHTMLAttributes<HTMLSelectElement> {
    options: IOption[]
    defaultOptionMessage?: string
    inputRef?: () => void
}

const Select: React.SFC<ISelectProps> = (props) => {
    const {
        name,
        options,
        className,
        inputRef,
        defaultOptionMessage,
        ...rest
    } = props

    return (
        <select
            name={name}
            ref={inputRef}
            className={classNames(
                'select',
                !props.value && !props.defaultValue && 'select--default-option',
                className
            )}
            {...rest}
        >
            {!props.value &&
                !props.defaultValue && (
                    <option aria-selected={false}>
                        {defaultOptionMessage}
                    </option>
                )}
            {options.length > 0 &&
                options.map((option, i) => (
                    <option
                        key={option.id}
                        value={option.id}
                        aria-selected={Number(props.value) === option.id}
                    >
                        {option.name}
                    </option>
                ))}
        </select>
    )
}

export default Select
