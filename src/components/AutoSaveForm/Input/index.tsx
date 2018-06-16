import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledInput, { IInputProps } from 'components/Form/Input'
import Saving from 'components/Saving'

interface IAutoSaveInputProps extends IInputProps {
    name: string
}

const Input: React.SFC<IAutoSaveInputProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange, updating }) => {
            return (
                <div style={{ position: 'relative' }}>
                    {updating === props.name && <Saving />}
                    <UncontrolledInput
                        value={(values[props.name] as string) || ''}
                        onChange={(event) => {
                            onChange({
                                name: props.name,
                                value: event.target.value,
                                debounced: true
                            })
                        }}
                        {...props}
                    />
                    <Alert message={errors[props.name]} />
                </div>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Input
