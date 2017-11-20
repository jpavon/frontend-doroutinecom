import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

import './style.css'

class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        errors: PropTypes.array,
        right: PropTypes.bool,
        item: PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.oneOf(['left', 'right']).isRequired
        })
    }

    render() {
        const {
            type,
            name,
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
                {errors && <div className="form-errors">{errors.map((error, i) => (
                    <div key={i} className="form-error">{error}</div>
                ))}</div>}
            </div>
        )
    }
}

export default Input
