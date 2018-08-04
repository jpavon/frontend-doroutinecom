import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledSelect, { SelectProps } from 'components/Form/Select'
import Saving from 'components/Saving'

interface AutoSaveFormSelectProps extends SelectProps {
    name: string
    noOptionsMessage?: string
}

const Select: React.SFC<AutoSaveFormSelectProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange, updating }) => {
            const { noOptionsMessage, ...rest } = props
            return (
                <span style={{ position: 'relative' }}>
                    {updating === props.name && <Saving />}
                    <UncontrolledSelect
                        value={(values[props.name] as string) || ''}
                        onChange={(event) => {
                            onChange({
                                name: props.name,
                                value: event.target.value,
                                debounced: true
                            })
                        }}
                        {...rest}
                    />
                    <Alert
                        message={
                            props.options.length < 1 && noOptionsMessage
                                ? noOptionsMessage
                                : null
                        }
                    />
                    {errors && <Alert message={errors[props.name]} />}
                </span>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Select
