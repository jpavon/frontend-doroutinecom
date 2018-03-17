import * as React from 'react'
import * as PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledSelect from 'components/Form/Select'
import Saving from 'components/Saving'

export interface IOption {
    id: number | string
    name: string | null
}

interface ISelectProps {
    name: string
    options: IOption[]
    noOptionsMessage: string

    // ...rest
    // tslint:disable-next-line
    [key: string]: any
}

interface ISelectContext {
    formContext: {
        onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
        values: object
        errors: {
            [index: string]: string
        }
        updating: string | null
    }
}

class Select extends React.Component<ISelectProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: ISelectContext

    render() {

        const {
            name,
            options,
            noOptionsMessage,
            ...rest
        } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        return (
            <span style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledSelect
                    name={name}
                    value={values[name] || ''}
                    options={options || []}
                    onChange={onChange}
                    {...rest}
                />
                <Alert
                    message={options.length < 1 ? noOptionsMessage : null}
                />
                <Alert
                    message={errors[name]}
                />
            </span>
        )
    }
}

export default Select
