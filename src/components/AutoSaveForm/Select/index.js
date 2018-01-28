import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledSelect from 'components/Form/Select'
import Saving from 'components/Saving'

const Select = (props, context) => {

    const {
        name,
        options,
        noOptionsMessage,
        ...rest
    } = props

    const { values, errors, onChange, updating } = context.formContext

    return (
        <Fragment>
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledSelect
                    name={name}
                    value={values[name] || ''}
                    options={options}
                    onChange={onChange}
                    {...rest}
                />
            </div>
            <Alert
                message={options < 1 && noOptionsMessage}
            />
            <Alert
                size="small"
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
    formContext: PropTypes.object.isRequired
}

export default Select
