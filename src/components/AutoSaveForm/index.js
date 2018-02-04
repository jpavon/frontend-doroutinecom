import { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import debounce from 'lodash/debounce'
import { format } from 'utils/date'

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
        }
    }

    componentDidMount() {
        this.initialize(this.props.initialValues)
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
            values: {
                ...prevState.values,
                [name]: value
            }
        }))

        if (event && (event.target.type === 'select' || event.target.type === 'checkbox')) {
            this.update(this.state.values.id, name, value)
        } else {
            this.debounceUpdate(this.state.values.id, name, value)
        }
    }

    debounceUpdate = debounce((...args) => {
        this.update(...args)
    }, 500)

    update = (id, name, value) => {
        this.props.update(id, { [name]: value })
            .then((resp) => {
                this.setState({
                    errors: resp.error ? resp.error.errors : {},
                    updating: resp.error ? null : name,
                })

                debounce(() => {
                    this.setState({updating: null})
                }, 500)()
            })
    }

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
