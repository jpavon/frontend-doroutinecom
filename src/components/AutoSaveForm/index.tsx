import * as React from 'react'
import { debounce } from 'lodash'

interface IValues {
    id: number
    // tslint:disable-next-line:no-any
    [index: string]: any
}

export interface IAutoSaveFormState {
    values: IValues
    errors: Record<string, string>
    updating: string | null
}

interface IAutoSaveFormProps {
    initialValues: IValues
    update: (
        id: number,
        // tslint:disable-next-line:no-any
        data: Record<string, any>,
        resolve?: () => void,
        reject?: () => void
    ) => void
    render: (state: IAutoSaveFormState) => React.ReactNode
}

interface IAutoSaveFormChangeOptions {
    name: string
    value: string | boolean
    debounced?: boolean
}

export interface IAutoSaveFormContext {
    onChange: (options: IAutoSaveFormChangeOptions) => void
    values: IAutoSaveFormState['values']
    errors: IAutoSaveFormState['errors']
    updating: IAutoSaveFormState['updating']
}

interface IUpdateData {
    id: number
    name: string
    value: string | number | boolean | null
}

const Context = React.createContext({} as IAutoSaveFormContext)

class AutoSaveForm extends React.Component<
    IAutoSaveFormProps,
    IAutoSaveFormState
> {
    private canUpdateState: boolean = false

    public readonly state = {
        values: this.props.initialValues,
        errors: {},
        updating: null
    }

    public componentDidMount() {
        this.canUpdateState = true
    }

    public componentWillUnmount() {
        this.canUpdateState = false
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

        const data: IUpdateData = {
            id: this.state.values.id,
            name: options.name,
            value: options.value
        }

        if (options.debounced) {
            this.debounceUpdate(data)
        } else {
            this.update(data)
        }
    }

    public update = (data: IUpdateData) => {
        new Promise((resolve, reject) => {
            this.props.update(
                data.id,
                { [data.name]: data.value },
                resolve,
                reject
            )
        })
            .then(() => {
                if (this.canUpdateState) {
                    this.setState({
                        updating: data.name,
                        errors: {}
                    })
                }

                debounce(() => {
                    if (this.canUpdateState) {
                        this.setState({
                            updating: null
                        })
                    }
                }, 500)()
            })
            .catch((error) => {
                if (this.canUpdateState) {
                    this.setState({
                        errors: error ? error.errors : {}
                    })
                }
            })
    }

    public debounceUpdate = debounce(this.update, 300)

    public render() {
        const store: IAutoSaveFormContext = {
            ...this.state,
            onChange: this.handleChange
        }

        return (
            <Context.Provider value={store}>
                {this.props.render(this.state)}
            </Context.Provider>
        )
    }
}

export const AutoSaveFormConsumer = Context.Consumer

export default AutoSaveForm
