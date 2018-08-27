import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledTextarea, { TextareaProps } from 'components/Form/Textarea'
import Saving from 'components/Saving'

interface AutoSaveFormTextareaProps extends TextareaProps {
    name: string
}

const Textarea: React.SFC<AutoSaveFormTextareaProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange, updating }) => {
            return (
                <div style={{ position: 'relative' }}>
                    {updating === props.name && <Saving />}
                    <UncontrolledTextarea
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

export default Textarea
