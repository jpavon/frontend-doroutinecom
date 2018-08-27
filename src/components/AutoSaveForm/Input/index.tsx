import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledInput, { InputProps } from 'components/Form/Input'
import Saving from 'components/Saving'

interface AutoSaveInputProps extends InputProps {
    name: string
}

const Input: React.SFC<AutoSaveInputProps> = (props) => (
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
                                value: event.target.value
                            })
                        }}
                        {...props}
                    />
                    {errors && <Alert message={errors[props.name]} />}
                </div>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Input
