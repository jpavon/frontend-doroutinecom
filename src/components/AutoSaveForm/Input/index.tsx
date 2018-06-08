import * as React from 'react'
import * as PropTypes from 'prop-types'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledInput, { IInputProps } from 'components/Form/Input'
import Saving from 'components/Saving'

interface IAutoSaveInputProps extends IInputProps {
    name: string
}

class Input extends React.Component<IAutoSaveInputProps> {
    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IAutoSaveFormContext

    render() {
        const { name, ...rest } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        const value = values[name] !== null ? String(values[name]) : ''

        return (
            <div style={{ position: 'relative' }}>
                {updating === name && <Saving />}
                <UncontrolledInput
                    name={name}
                    value={value}
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

export default Input
