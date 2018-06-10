import * as React from 'react'
import * as PropTypes from 'prop-types'
import { debounce, isEqual } from 'lodash'

interface IValues {
    id: number
    // tslint:disable-next-line:no-any
    [index: string]: any
}

export interface IAutoSaveFormState {
    values: IValues
    errors: {
        [index: string]: string
    }
    updating: string | null
}

interface IAutoSaveFormProps {
    initialValues: IValues
    update: (
        id: number,
        // tslint:disable-next-line:no-any
        data: { [index: string]: any },
        resolve?: () => void,
        reject?: () => void
    ) => void
    render: (state: IAutoSaveFormState) => React.ReactNode
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

class AutoSaveForm extends React.Component<
    IAutoSaveFormProps,
    IAutoSaveFormState
> {
    public static childContextTypes = {
        formContext: PropTypes.object.isRequired
    }

    public reinitializeValues: boolean

    public getChildContext = (): IAutoSaveFormContext => ({
        formContext: {
            ...this.state,
            onChange: this.handleChange
        }
    })

    constructor(props: IAutoSaveFormProps) {
        super(props)

        this.state = {
            values: props.initialValues,
            errors: {},
            updating: null
        }

        this.reinitializeValues = true
    }

    public componentWillReceiveProps(nextProps: IAutoSaveFormProps) {
        if (
            this.reinitializeValues &&
            !isEqual(this.props.initialValues, nextProps.initialValues)
        ) {
            this.initialize(nextProps.initialValues)
        }
    }

    public initialize = (values: IValues) => {
        this.setState({
            values
        })
    }

    public handleChange = (options: IAutoSaveFormChangeOptions) => {
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [options.name]: options.value
            }
        }))

        if (options.debounced) {
            this.debounceUpdate(
                this.state.values.id,
                options.name,
                options.value
            )
        } else {
            this.update(this.state.values.id, options.name, options.value)
        }
    }

    public update = (id: number, name: string, value: string | boolean) => {
        this.reinitializeValues = false

        new Promise((resolve, reject) => {
            this.props.update(id, { [name]: value }, resolve, reject)
        })
            .then(() => {
                this.setState({
                    updating: name,
                    errors: {}
                })

                debounce(() => {
                    this.setState({
                        updating: null
                    })
                }, 500)()
            })
            .catch((error) => {
                this.setState({
                    errors: error ? error.errors : {}
                })
            })
            .finally(() => {
                this.reinitializeValues = true
            })
    }

    public debounceUpdate = debounce(this.update, 300)

    public render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
