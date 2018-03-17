import * as React from 'react'
import * as PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledCheckbox from 'components/Form/Checkbox'

interface ICheckboxProps {
    name: string

    // ...rest
    // tslint:disable-next-line
    [key: string]: any
}

interface ICheckboxContext {
    formContext: {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        values: object
        errors: {
            [index: string]: string
        }
    }
}

class Checkbox extends React.Component<ICheckboxProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: ICheckboxContext

    render() {
        const {
            id,
            name,
            ...rest
        } = this.props

        const { values, errors, onChange } = this.context.formContext

        return (
            <>
                <UncontrolledCheckbox
                    id={id}
                    name={name}
                    checked={values[name]}
                    onChange={onChange}
                    {...rest}
                />
                <Alert
                    message={errors[name]}
                />
            </>
        )
    }
}

export default Checkbox
