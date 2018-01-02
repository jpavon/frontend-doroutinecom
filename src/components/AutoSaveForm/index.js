import { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import debounce from 'lodash/debounce'

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
            updating: null,
            reinitialize: true
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.state.reinitialize &&
            !isEqual(this.props.initialValues, nextProps.initialValues)
        ) {
            this.initialize(nextProps.initialValues)
        }
    }

    initialize = (values) => {
        this.setState({
            values
        })
    }

    handleChange = (event) => {
        const target = event.target
        const name = event.target.name
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState((prevState) => ({
            reinitialize: false,
            values: {
                ...prevState.values,
                [name]: value
            }
        }))

        if (target.type === 'select' || target.type === 'checkbox') {
            this.update(this.state.values.id, name, value)
        } else {
            this.debounceUpdate(this.state.values.id, name, value)
        }
    }

    debounceUpdate = debounce((id, name, value) => {
        this.update(id, name, value)
    }, 500)

    update = (id, name, value) => {
        this.props.update(id, { [name]: value })
            .then((resp) => {
                this.setState({
                    errors: resp.error ? resp.error.errors : {},
                    updating: resp.error ? null : name,
                    reinitialize: true
                })

                setTimeout(() => {
                    this.setState({updating: null})
                }, 500)
            })
    }

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
