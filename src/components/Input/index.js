import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

import './style.css'

class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        errors: PropTypes.array,
        item: PropTypes.shape({
            name: PropTypes.string,
            position: PropTypes.oneOf(['left', 'right'])
        })
    }

    render() {
        const {
            type,
            name,
            value,
            item,
            errors,
            ...rest
        } = this.props;

        const Item = (item && <div className="form-input-item">{item.name}</div>)

        return (
            <div className="form-input-container">
                <div className="form-input">
                    {item && item.position === 'left' && Item}
                    <Field type={type || 'text'} name={name} {...rest} />
                    {item && item.position === 'right' && Item}
                </div>
                {errors && <div className="form-errors">{errors.map((error) => (
                    <div className="form-error">{error}</div>
                ))}</div>}
            </div>
        )
    }
}

export default Input
