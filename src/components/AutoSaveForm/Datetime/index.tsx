import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Moment } from 'moment'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import UncontrolledDatetime, { IDatetimeProps } from 'components/Form/Datetime'
import Alert from 'components/Form/Alert'
import Saving from 'components/Saving'

class Input extends React.Component<IDatetimeProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IAutoSaveFormContext

    render() {
        const {
            name,
            ...rest
        } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        return (
            <div className={`datetime-${name}`} style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledDatetime
                    name={name}
                    value={values[name] || ''}
                    onChange={(moment: Moment) => {
                        onChange(null, {name, moment})
                    }}
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
