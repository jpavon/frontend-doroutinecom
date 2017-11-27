import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'

export default function withForm(WrappedComponent) {
    return class WithForm extends Component {

        static propTypes = {
            data: PropTypes.object.isRequired,
            update: PropTypes.func.isRequired
        }

        static childContextTypes = {
            data: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired,
            onChange: PropTypes.func.isRequired,
        }

        getChildContext = () => ({
            data: this.state.data,
            errors: this.state.errors,
            onChange: this.handleChange,
        })

        state = {
            data: this.props.data,
            errors: {}
        }

        isChanging = false

        componentWillReceiveProps(nextProps) {
            if (
                !this.isChanging && !isEqual(nextProps.data, this.state.data)
            ) {
                this.setState({ data: nextProps.data })
            }
        }

        // shouldComponentUpdate(nextProps) {
        //     return !this.isChanging && !isEqual(this.state.data, nextProps.data)
        // }

        handleChange = (event, name) => {
            const value = event.target.value

            this.isChanging = true

            this.setState((prevState) => ({
                data: {
                    ...prevState.data,
                    [name]: value
                }
            }), () => {
                this.props.update(this.props.data.id, { [name]: value })
                    .then((payload) => {
                        this.isChanging = false

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
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            )
        }
    }
}
