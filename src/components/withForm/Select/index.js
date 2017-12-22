import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FORM_CONTEXT } from 'components/withForm'
import Alert from 'components/Alert'
import UncontrolledSelect from 'components/Form/Select'

const Select = (props, context) => {

    const {
        name,
        options,
        noOptionsMessage,
        ...rest
    } = props

    const { data, errors, onChange } = context[FORM_CONTEXT]

    const value = data[name]

    return (
        <Fragment>
            <UncontrolledSelect
                value={value || ''}
                name={name}
                options={options}
                onChange={(event) => onChange(event, name)}
                className="select"
                {...rest}
            />
            <Alert
                error
                message={options < 1 && noOptionsMessage}
            />
            <Alert
                error
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
