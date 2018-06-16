import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledSelect, { ISelectProps } from 'components/Form/Select'
import Saving from 'components/Saving'

interface IAutoSaveFormSelectProps extends ISelectProps {
    name: string
    noOptionsMessage?: string
}

const Select: React.SFC<IAutoSaveFormSelectProps> = (props) => (
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
                    <Alert message={errors[props.name]} />
                </span>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Select
