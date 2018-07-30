import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledCheckbox, { ICheckboxProps } from 'components/Form/Checkbox'

interface IAutoSaveCheckboxProps extends ICheckboxProps {
    name: string
}

const Checkbox: React.SFC<IAutoSaveCheckboxProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange }) => {
            return (
                <>
                    <UncontrolledCheckbox
                        name={props.name}
                        checked={values[props.name] as boolean}
                        onChange={(event) => {
                            onChange({
                                name: props.name,
                                value: event.target.checked,
                                debounced: true
                            })
                        }}
                        {...props}
                    />
                    <Alert message={errors[props.name]} />
                </>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Checkbox
