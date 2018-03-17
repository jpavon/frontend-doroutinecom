import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Moment } from 'moment'

import UncontrolledDatetime from 'components/Form/Datetime'
import Alert from 'components/Form/Alert'
import Saving from 'components/Saving'

interface IDatetimeProps {
    name: string

    // ...rest
    // tslint:disable-next-line
    [key: string]: any
}

interface IDate {
    name: string
    moment: Moment
}

interface IDatetimeContext {
    formContext: {
        onChange: (event: null, date: IDate) => void
        values: object
        errors: {
            [index: string]: string
        }
        updating: string | null
    }
}

class Input extends React.Component<IDatetimeProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: IDatetimeContext

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
