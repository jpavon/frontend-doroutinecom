import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'

export const FORM_CONTEXT = '__FORM_CONTEXT__'

class AutoSaveForm extends Component {

    static propTypes = {
        initialValues: PropTypes.object.isRequired,
        update: PropTypes.func.isRequired,
        render: PropTypes.func.isRequired
    }

    static childContextTypes = {
        [FORM_CONTEXT]: PropTypes.object.isRequired
    }

    getChildContext = () => ({
        [FORM_CONTEXT] : {
            ...this.state,
            onChange: this.handleChange,
        }
    })

    constructor(props) {
        super(props)

        this.state = {
            values: props.initialValues,
            errors: {},
            updatedKey: null,
            isUpdating: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.state.isUpdating === false &&
            !isEqual(nextProps.initialValues, this.props.initialValues)
        ) {
            this.setState({
                values: nextProps.initialValues
            })
        }
    }

    handleChange = (event) => {
        const target = event.target
        const name = event.target.name
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState((prevState) => ({
            isUpdating: true,
            values: {
                ...prevState.values,
                [name]: value
            }
        }), () => {
            this.props.update(this.state.values.id, { [name]: value })
                .then((resp) => {
                    if (resp.error) {
                        this.setState({
                            errors: resp.error.errors,
                        })
                    } else {
                        this.setState({
                            errors: {},
                            updatedKey: name
                        }, () => {
                            this.setState({updatedKey: null})
                        })
                    }

                    this.setState({isUpdating: false})
                })
        })
    }

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
