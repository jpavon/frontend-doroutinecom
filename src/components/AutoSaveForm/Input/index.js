import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledInput from 'components/Form/Input'
import Saving from 'components/Saving'

const Input = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange, updating } = context.formContext

    const value = values[name] !== null ? String(values[name]) : ''

    return (
        <Fragment>
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
