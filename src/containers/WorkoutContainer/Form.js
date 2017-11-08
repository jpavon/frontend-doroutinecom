import React, { Component } from 'react'
import { Field } from 'formik'
import withForm from 'components/Form'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }
    }

    render() {
        const {
            errors,
            setFieldValue
        } = this.props

        return (
            <form>
                <label htmlFor="name">Workout name:</label>
                <Field
                    id="name"
                    name="name"
                />
                {errors.name && <div>{errors.name}</div>}

                <SingleDatePicker
                    date={moment(this.props.values.day)}
                    onDateChange={date => setFieldValue('day', date.format('YYYY-MM-DD hh:mm:ss'))}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    numberOfMonths={1}
                />

                <label htmlFor="notes">Notes</label>
                <Field
                    id="notes"
                    name="notes"
                />
                {errors.notes && <div>{errors.notes}</div>}
            </form>
        )
    }
}

export default withForm(Form)
