import * as React from 'react'

import TickSvg from 'media/tick.svg'

import { Checkbox as StyledCheckbox, CheckboxTick } from './style'

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.SFC<CheckboxProps> = (props) => {
    const { id, name, checked, onChange } = props

    return (
        <>
            <CheckboxTick checked={checked}>
                {checked && <TickSvg />}
            </CheckboxTick>
            <StyledCheckbox
                id={id}
                name={name}
                checked={checked}
                type="checkbox"
                onChange={onChange}
                aria-checked={checked}
            />
        </>
    )
}

export default Checkbox
