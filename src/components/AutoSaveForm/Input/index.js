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

    return (
        <Fragment>
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledInput
                    name={name}
                    value={values[name] || ''}
                    onChange={onChange}
                    {...rest}
                />
            </div>
            <Alert
                message={errors[name]}
            />
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
