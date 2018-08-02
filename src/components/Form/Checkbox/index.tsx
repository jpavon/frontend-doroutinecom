import * as React from 'react'
import * as classNames from 'classnames'

import TickSvg from 'media/tick.svg'

import { Checkbox as StyledCheckbox, CheckboxTick } from './style'

export interface ICheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.SFC<ICheckboxProps> = (props) => {
    const { id, name, className, checked, onChange } = props

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
                className={classNames('checkbox', className)}
                onChange={onChange}
                aria-checked={checked}
            />
        </>
    )
}

export default Checkbox
