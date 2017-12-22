import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/withForm'
import Alert from 'components/Alert'
import FlashMessage from 'components/FlashMessage'
import UncontrolledInput from 'components/Form/Input'

const Input = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { data, errors, onChange, updatedKey } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <FlashMessage
                visible={updatedKey === name}
            >
                Updated.
            </FlashMessage>
            <UncontrolledInput
                name={name}
                value={data[name] || ''}
                onChange={(event) => onChange(event, name)}
                {...rest}
            />
            <Alert
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
