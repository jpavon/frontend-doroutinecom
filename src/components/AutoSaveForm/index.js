import { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { format } from 'utils/date'
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
            updating: null,
            reinitializeValues: true
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.state.reinitializeValues &&
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

    handleChange = (event, date) => {
        let name
        let value

        if (event) {
            const target = event.target
            name = event.target.name
            value = target.type === 'checkbox' ? target.checked : target.value
        } else {
            name = date.name
            value = date.moment.format(format)
        }

        this.setState((prevState) => ({
            reinitializeValues: false,
            values: {
                ...prevState.values,
                [name]: value
            }
        }))

        const args = [this.state.values.id, name, value]

        if (event && (event.target.type === 'select' || event.target.type === 'checkbox')) {
            this.update(...args)
        } else {
            this.debounceUpdate(...args)
        }
    }

    debounceUpdate = debounce((...args) => {
        this.update(...args)
    }, 300)

    update = (id, name, value) => {
        this.props.update(id, { [name]: value })
            .then((resp) => {
                this.setState({
                    errors: resp.error ? resp.error.errors : {},
                    updating: resp.error ? null : name,
                    reinitializeValues: true
                })

                debounce(() => {
                    this.setState({
                        updating: null,
                    })
                }, 500)()
            })
    }

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
