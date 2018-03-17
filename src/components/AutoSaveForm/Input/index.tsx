import * as React from 'react'
import * as PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledInput from 'components/Form/Input'
import Saving from 'components/Saving'

interface IInputProps {
    name: string

    // ...rest
    // tslint:disable-next-line
    [key: string]: any
}

interface IInputContext {
    formContext: {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        values: object
        errors: {
            [index: string]: string
        }
        updating: string | null
    }
}

class Input extends React.Component<IInputProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IInputContext

    render() {
        const {
            name,
            ...rest
        } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        const value = values[name] !== null ? String(values[name]) : ''

        return (
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledInput
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
                <Alert
                    message={errors[name]}
                />
            </div>
        )
    }
}

export default Input
