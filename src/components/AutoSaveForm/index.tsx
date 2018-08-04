import * as React from 'react'
import { debounce } from 'lodash'

export interface AutoSaveFormState<T> {
    values: T
    errors?: Record<string, string>
    updating: string | null
}

interface AutoSaveFormProps<T> {
    initialValues: T
    update: (
        id: number,
        data: Partial<T>,
        resolve?: () => void,
        reject?: () => void
    ) => void
    render: (state: AutoSaveFormState<T>) => React.ReactNode
}

interface NameValue<T> {
    name: keyof T
    value: T[keyof T]
}

interface AutoSaveFormChangeOptions<T> extends NameValue<T> {
    debounced?: boolean
}

interface UpdateData<T> extends NameValue<T> {
    id: number
}

export interface AutoSaveFormContext<T> extends AutoSaveFormState<T> {
    onChange: (options: AutoSaveFormChangeOptions<T>) => void
}

// tslint:disable-next-line:no-any
const Context = React.createContext({} as AutoSaveFormContext<any>)

class AutoSaveForm<T extends { id: number }> extends React.Component<
    AutoSaveFormProps<T>,
    AutoSaveFormState<T>
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

    public initialize = (values: T) => {
        this.setState({
            values
        })
    }

    public handleChange = (options: AutoSaveFormChangeOptions<T>) => {
        // spread issue with generics https://github.com/Microsoft/TypeScript/issues/10727
        // this.setState((prevState) => ({
        //     values: {
        //         ...prevState.values,
        //         [options.name]: options.value
        //     }
        // }))

        this.setState((prevState) => ({
            values: Object.assign({}, prevState.values, {
                [options.name]: options.value
            })
        }))

        const data: UpdateData<T> = {
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

    public update = (data: UpdateData<T>) => {
        new Promise((resolve, reject) => {
            this.props.update(
                data.id,
                { [data.name]: data.value } as Partial<T>,
                resolve,
                reject
            )
        })
            .then(() => {
                if (this.canUpdateState) {
                    this.setState({
                        updating: data.name as string,
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
        const store: AutoSaveFormContext<T> = {
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
