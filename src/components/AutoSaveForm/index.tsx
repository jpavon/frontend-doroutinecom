import * as React from 'react'
import * as PropTypes from 'prop-types'
import { debounce, isEqual } from 'lodash'

interface IValues {
    id: number
    // tslint:disable-next-line
    [index: string]: any
}

interface IAutoSaveFormProps {
    initialValues: IValues
    // tslint:disable-next-line
    update: (id: number, data: { [index: string]: any }, resolve?: () => void, reject?: () => void) => void
    render: (state: IAutoSaveFormState) => React.ReactNode
}

export interface IAutoSaveFormState {
    values: IValues
    errors: {
        [index: string]: string
    }
    updating: string | null
}

interface IAutoSaveFormChangeOptions {
    name: string
    value: string | boolean
    debounced: boolean
}

export interface IAutoSaveFormContext {
    formContext: {
        onChange: (options: IAutoSaveFormChangeOptions) => void
        values: IAutoSaveFormState['values']
        errors: IAutoSaveFormState['errors']
        updating: IAutoSaveFormState['updating']
    }
}

class AutoSaveForm extends React.Component<IAutoSaveFormProps, IAutoSaveFormState> {

    static childContextTypes = {
        formContext: PropTypes.object.isRequired
    }

    reinitializeValues: boolean

    getChildContext = (): IAutoSaveFormContext => ({
        formContext: {
            ...this.state,
            onChange: this.handleChange,
        }
    })

    constructor(props: IAutoSaveFormProps) {
        super(props)

        this.state = {
            values: props.initialValues,
            errors: {},
            updating: null,
        }

        this.reinitializeValues = true
    }

    componentWillReceiveProps(nextProps: IAutoSaveFormProps) {
        if (
            this.reinitializeValues &&
            !isEqual(this.props.initialValues, nextProps.initialValues)
        ) {
            this.initialize(nextProps.initialValues)
        }
    }

    initialize = (values: IValues) => {
        this.setState({
            values
        })
    }

    handleChange = (options: IAutoSaveFormChangeOptions) => {

        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [options.name]: options.value
            }
        }))

        if (options.debounced) {
            this.debounceUpdate(this.state.values.id, options.name, options.value)
        } else {
            this.update(this.state.values.id, options.name, options.value)
        }
    }

    update = (id: number, name: string, value: string | boolean) => {

        this.reinitializeValues = false

        new Promise((resolve, reject) => {
            this.props.update(id, { [name]: value }, resolve, reject)
        }).then((payload) => {
            this.setState({
                updating: name,
                errors: {}
            })

            debounce(() => {
                this.setState({
                    updating: null,
                })
            }, 500)()
        }).catch((error) => {
            this.setState({
                errors: error ? error.errors : {},
            })
        }).finally(() => {
            this.reinitializeValues = true
        })
    }

    // tslint:disable-next-line
    debounceUpdate = debounce(this.update, 300)

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
