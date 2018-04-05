import * as React from 'react'
import * as PropTypes from 'prop-types'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledCheckbox, { ICheckboxProps } from 'components/Form/Checkbox'

interface IAutoSaveCheckboxProps extends ICheckboxProps {
    name: string
}

class Checkbox extends React.Component<IAutoSaveCheckboxProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IAutoSaveFormContext

    render() {
        const {
            name,
            ...rest
        } = this.props

        const { values, errors, onChange } = this.context.formContext

        return (
            <>
                <UncontrolledCheckbox
                    name={name}
                    checked={values[name]}
                    onChange={(event) => {
                        onChange({
                            name,
                            value: event.target.checked,
                            debounced: false
                        })
                    }}
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
