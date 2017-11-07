import React, { Component } from 'react'
import { withFormik, Field } from 'formik'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class InnerForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: this.props.values.day,
            focused: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.values !== this.props.values) {
            this.props.updateWorkout(nextProps.values.id, nextProps.values)
                .then((payload) => {
                    if (payload.error) {
                        console.log(this.props)
                        this.props.setErrors(payload.error.errors)
                    } else {
                        this.props.setErrors({})
                    }
                })
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
                    date={moment(this.props.values.day)} // momentPropTypes.momentObj or null
                    onDateChange={date => setFieldValue('day', date.format('YYYY-MM-DD hh:mm:ss'))} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
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

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        id: props.workout.id || '',
        name: props.workout.name || '',
        notes: props.workout.notes || '',
        day: props.workout.day || ''
    })
})

export default formikEnhancer(InnerForm)
