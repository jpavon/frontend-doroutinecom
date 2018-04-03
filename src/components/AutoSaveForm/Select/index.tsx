import * as React from 'react'
import * as PropTypes from 'prop-types'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import Alert from 'components/Form/Alert'
import UncontrolledSelect, { ISelectProps } from 'components/Form/Select'
import Saving from 'components/Saving'

interface IAutoSaveFormSelectProps extends ISelectProps {
    noOptionsMessage?: string
}

class Select extends React.Component<IAutoSaveFormSelectProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IAutoSaveFormContext<HTMLSelectElement>

    render() {

        const {
            name,
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
                    onChange={(event) => {
                        onChange({
                            name,
                            value: event.target.value,
                            debounced: true
                        })
                    }}
                    {...rest}
                />
                <Alert
                    message={(this.props.options.length < 1 && noOptionsMessage) ? noOptionsMessage : null}
                />
                <Alert
                    message={errors[name]}
                />
            </span>
        )
    }
}

export default Select
