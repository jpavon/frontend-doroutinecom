import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/AutoSaveForm'
import Alert from 'components/Alert'
import FlashMessage from 'components/FlashMessage'
import UncontrolledInput from 'components/Form/Input'

const Input = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange, updatedKey } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <FlashMessage
                visible={updatedKey === name}
            />
            <UncontrolledInput
                name={name}
                value={values[name] || ''}
                onChange={onChange}
                {...rest}
            />
            <Alert
                small
                type="error"
                message={errors[name]}
            />
        </Fragment>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
}

Input.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Input
