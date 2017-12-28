import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert from 'components/Alert'
import FlashMessage from 'components/FlashMessage'
import UncontrolledInput from 'components/Form/Input'

const Input = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange, updatedKey } = context.formContext

    return (
        <Fragment>
            {updatedKey === name &&
                <FlashMessage />
            }
            <UncontrolledInput
                name={name}
                value={values[name] || ''}
                onChange={onChange}
                {...rest}
            />
            <Alert
                size="small"
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
    formContext: PropTypes.object.isRequired
}

export default Input
