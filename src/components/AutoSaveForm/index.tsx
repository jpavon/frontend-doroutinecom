import * as React from 'react'
import * as PropTypes from 'prop-types'
import { debounce, isEqual } from 'lodash'
import { serverDateFormat } from 'utils/date'
import { Moment } from 'moment'

interface IDate {
    name: string
    moment: Moment
}

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
    errors: object
    updating: string | null
    reinitializeValues: boolean
}

class AutoSaveForm extends React.Component<IAutoSaveFormProps, IAutoSaveFormState> {

    static childContextTypes = {
        formContext: PropTypes.object.isRequired
    }

    getChildContext = () => ({
        formContext : {
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
            reinitializeValues: true
        }
    }

    componentWillReceiveProps(nextProps: IAutoSaveFormProps) {
        if (
            this.state.reinitializeValues &&
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

    handleChange = (event: React.ChangeEvent<HTMLInputElement>, date?: IDate) => {
        let name: string
        let value: string | boolean

        if (event) {
            const target = event.target
            name = event.target.name
            value = target.type === 'checkbox' ? target.checked : target.value
        } else {
            // change this, find better way
            name = date ? date.name : ''
            value = date ? date.moment.format(serverDateFormat) : ''
        }

        this.setState((prevState) => ({
            reinitializeValues: false,
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

    update = (id: number, name: string, value: string | boolean) => {

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
            this.setState({
                reinitializeValues: true
            })
        })
        // this.props.update(id, { [name]: value })
        //     .then((resp) => {
        //         this.setState({
        //             errors: resp.error ? resp.error.errors : {},
        //             updating: resp.error ? null : name,
        //             reinitializeValues: true
        //         })

        //         debounce(() => {
        //             this.setState({
        //                 updating: null,
        //             })
        //         }, 500)()
        //     })
    }

    // tslint:disable-next-line
    debounceUpdate = debounce(this.update, 300)

    render() {
        return this.props.render(this.state)
    }
}

export default AutoSaveForm
