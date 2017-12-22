import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/withForm'
import Alert from 'components/Alert'
import UncontrolledCheckbox from 'components/Form/Checkbox'

const Checkbox = (props, context) => {

    const {
        name,
        ...rest
    } = props

    const { data, errors, onChange } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <UncontrolledCheckbox
                name={name}
                checked={data[name]}
                onChange={(event) => onChange(event, name)}
                {...rest}
            />
            <Alert
                error
                message={errors[name]}
            />
        </Fragment>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
}

Checkbox.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Checkbox