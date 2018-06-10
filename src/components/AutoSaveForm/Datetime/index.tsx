import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Moment } from 'moment'

import { IAutoSaveFormContext } from 'components/AutoSaveForm'

import { serverDateFormat } from 'utils/date'

import UncontrolledDatetime, { IDatetimeProps } from 'components/Form/Datetime'
import Alert from 'components/Form/Alert'
import Saving from 'components/Saving'

interface IAutoSaveDatetimeProps extends IDatetimeProps {}

class Input extends React.Component<IAutoSaveDatetimeProps> {
    public static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    public context: IAutoSaveFormContext

    public render() {
        const { name, ...rest } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        return (
            <div
                className={`datetime-${name}`}
                style={{ position: 'relative' }}
            >
                {updating === name && <Saving />}
                <UncontrolledDatetime
                    name={name}
                    value={values[name] || ''}
                    onChange={(moment: Moment) => {
                        onChange({
                            name,
                            value: moment.format(serverDateFormat),
                            debounced: false
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
