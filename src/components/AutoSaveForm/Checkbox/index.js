import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledCheckbox from 'components/Form/Checkbox'

const Checkbox = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { values, errors, onChange } = context.formContext

    return (
        <Fragment>
            <UncontrolledCheckbox
                name={name}
                checked={values[name]}
                onChange={onChange}
                {...rest}
            />
            <Alert
                message={errors[name]}
            />
        </Fragment>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
}

Checkbox.contextTypes = {
    formContext: PropTypes.object.isRequired
}

export default Checkbox
