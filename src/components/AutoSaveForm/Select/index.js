import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/AutoSaveForm'
import Alert from 'components/Alert'
import UncontrolledSelect from 'components/Form/Select'

const Select = (props, context) => {

    const {
        name,
        options,
        noOptionsMessage,
        ...rest
    } = props

    const { values, errors, onChange } = context[FORM_CONTEXT]

    return (
        <Fragment>
            <UncontrolledSelect
                name={name}
                value={values[name] || ''}
                options={options}
                onChange={onChange}
                className="select"
                {...rest}
            />
            <Alert
                small
                type="error"
                message={options < 1 && noOptionsMessage}
            />
            <Alert
                small
                type="error"
                message={errors[name]}
            />
        </Fragment>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
}

Select.contextTypes = {
    [FORM_CONTEXT]: PropTypes.object.isRequired
}

export default Select
