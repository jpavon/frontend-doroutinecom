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
            updating: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.state.updating === null &&
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
            values: {
                ...prevState.values,
                [name]: value
            }
        }), () => {
            this.update(this.state.values.id, name, value)
        })
    }

    update = debounce((id, name, value) => {
        this.setState({updating: name})

        this.props.update(id, { [name]: value })
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

                setTimeout(() => {
                    this.setState({updating: null})
                }, 400)
            })
    }, 250)

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
