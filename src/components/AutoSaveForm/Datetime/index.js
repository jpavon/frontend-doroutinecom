import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import UncontrolledDatetime from 'components/Form/Datetime'
import Alert from 'components/Form/Alert'
import Saving from 'components/Saving'

const Input = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange, updating } = context.formContext

    return (
        <Fragment>
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledDatetime
                    name={name}
                    value={values[name] || ''}
                    onChange={(moment) => {
                        onChange(null, {
                            name,
                            moment
                        })
                    }}
                    {...rest}
                />
                <Alert
                    message={errors[name]}
                />
            </div>
        </Fragment>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
}

Input.contextTypes = {
    formContext: PropTypes.object.isRequired
}

export default Input
