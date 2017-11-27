import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'

export default function withForm(WrappedComponent) {
    return class extends Component {

        static propTypes = {
            update: PropTypes.func.isRequired,
            data: PropTypes.object.isRequired
        }

        static childContextTypes = {
            errors: PropTypes.object.isRequired,
            update: PropTypes.func.isRequired,
        }

        getChildContext = () => ({
            errors: this.state.errors,
            update: this.handleUpdate,
        })

        state = {
            errors: {}
        }

        handleUpdate = (name, value) => {
            this.props.update(this.props.data.id, { [name]: value })
                .then((payload) => {
                    if (payload.error) {
                        this.setState({
                            errors: payload.error.errors
                        })
                    } else {
                        this.setState({
                            errors: {}
                        })
                    }
                })
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}
