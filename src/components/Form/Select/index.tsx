import * as React from 'react'

import ArrowDown from 'media/arrow-down.svg'
import { SelectWrapper, Select as StyledSelect } from './style'

interface Option {
    id: number | string
    name: string | null
}

export interface SelectProps
    extends React.InputHTMLAttributes<HTMLSelectElement> {
    options: Option[]
    defaultOptionMessage?: string
    inputRef?: () => void
}

const Select: React.SFC<SelectProps> = (props) => {
    const {
        name,
        options,
        className,
        inputRef,
        defaultOptionMessage,
        ...rest
    } = props

    return (
        <SelectWrapper>
            <ArrowDown />

            <StyledSelect
                name={name}
                ref={inputRef}
                isDefaultOption={!props.value && !props.defaultValue}
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
            </StyledSelect>
        </SelectWrapper>
    )
}

export default Select
