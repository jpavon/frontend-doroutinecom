import * as React from 'react'
import { debounce } from 'lodash'

export interface State<T> {
    values: T
    errors?: Record<string, string>
    updating: string | null
}

interface Props<T> {
    initialValues: T
    update: (
        id: number,
        data: Partial<T>,
        resolve: () => void,
        reject: () => void
    ) => void
    render: (state: State<T>) => React.ReactNode
}

interface ChangedData<T> {
    name: keyof T
    value: T[keyof T]
}

interface UpdateData<T> extends ChangedData<T> {
    id: number
}

export interface Context<T> extends State<T> {
    onChange: (options: ChangedData<T>) => void
}

// tslint:disable-next-line:no-any
const Context = React.createContext({} as Context<any>)

class AutoSaveForm<T extends { id: number }> extends React.Component<
    Props<T>,
    State<T>
> {
    private mounted: boolean = false

    public readonly state = {
        values: this.props.initialValues,
        errors: {},
        updating: null
    }

    public componentDidMount() {
        this.mounted = true
    }

    public componentWillUnmount() {
        this.mounted = false
    }

    public handleChange = (data: ChangedData<T>) => {
        // spread issue with generics https://github.com/Microsoft/TypeScript/issues/10727
        // this.setState((prevState) => ({
        //     values: {
        //         ...prevState.values,
        //         [data.name]: data.value
        //     }
        // }))

        this.setState((prevState) => ({
            values: Object.assign({}, prevState.values, {
                [data.name]: data.value
            })
        }))

        const updateData: UpdateData<T> = {
            id: this.state.values.id,
            name: data.name,
            value: data.value
        }

        this.debounceUpdate(updateData)
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
                if (this.mounted) {
                    this.setState({
                        updating: data.name as string,
                        errors: {}
                    })
                }

                debounce(() => {
                    if (this.mounted) {
                        this.setState({
                            updating: null
                        })
                    }
                }, 500)()
            })
            .catch((error) => {
                if (this.mounted) {
                    this.setState({
                        errors: error ? error.errors : {}
                    })
                }
            })
    }

    public debounceUpdate = debounce(this.update, 300)

    public render() {
        const store: Context<T> = {
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
