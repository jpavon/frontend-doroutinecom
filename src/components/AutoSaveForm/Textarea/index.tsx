import * as React from 'react'
import * as PropTypes from 'prop-types'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledTextarea, { ITextareaProps } from 'components/Form/Textarea'
import Saving from 'components/Saving'

interface IAutoSaveFormTextareaProps extends ITextareaProps {
    name: string
}

class Textarea extends React.Component<IAutoSaveFormTextareaProps> {
    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IAutoSaveFormContext

    render() {
        const { name, ...rest } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        return (
            <div style={{ position: 'relative' }}>
                {updating === name && <Saving />}
                <UncontrolledTextarea
                    name={name}
                    value={values[name] || ''}
                    onChange={(event) => {
                        onChange({
                            name,
                            value: event.target.value,
                            debounced: true
                        })
                    }}
                    {...rest}
                />
                <Alert message={errors[name]} />
            </div>
        )
    }
}

export default Textarea
