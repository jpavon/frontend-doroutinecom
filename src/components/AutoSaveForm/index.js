import { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'

class AutoSaveForm extends Component {

    static propTypes = {
        initialValues: PropTypes.object.isRequired,
        update: PropTypes.func.isRequired,
        render: PropTypes.func.isRequired
    }

    static childContextTypes = {
        formContext: PropTypes.object.isRequired
    }

    getChildContext = () => ({
        formContext : {
            ...this.state,
            onChange: this.handleChange,
        }
    })

    constructor(props) {
        super(props)

        this.state = {
            values: props.initialValues,
            errors: {},
            updating: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.state.isUpdating === null &&
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
            updating: name,
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
                            errors: {}
                        })
                    }

                    this.setState({updating: null})
                })
        })
    }

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
