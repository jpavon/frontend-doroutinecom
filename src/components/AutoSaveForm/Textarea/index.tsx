import * as React from 'react'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledTextarea, { ITextareaProps } from 'components/Form/Textarea'
import Saving from 'components/Saving'

interface IAutoSaveFormTextareaProps extends ITextareaProps {
    name: string
}

const Textarea: React.SFC<IAutoSaveFormTextareaProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange, updating }) => {
            return (
                <div style={{ position: 'relative' }}>
                    {updating === props.name && <Saving />}
                    <UncontrolledTextarea
                        value={(values[props.name] as string) || ''}
                        onChange={(event) => {
                            onChange({
                                name,
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

export default Textarea
