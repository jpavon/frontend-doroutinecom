import React, { Component } from 'react'
import { withFormik, Field } from 'formik'

class InnerForm extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.values !== this.props.values) {
            this.props.updateWorkout(nextProps.values.id, nextProps.values)
        }
    }

    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Workout name:</label>
                <Field
                    id="name"
                    name="name"
                />

                <label htmlFor="notes">Notes</label>
                <Field
                    id="notes"
                    name="notes"
                />

                <button type="submit" disabled={isSubmitting}>Delete</button>
            </form>
        )
    }
}

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        id: props.workout.id || '',
        name: props.workout.name || '',
        notes: props.workout.notes || '',
    }),
    handleSubmit: (values, { props, setSubmitting, setErrors, setValues,/* setStatus, and other goodies */ }) => {
        props.deleteWorkout(values.id)
            .then((data) => {
                if (data.error) {
                    setSubmitting(false)
                    setErrors(data.error.errors)
                } else {
                    setSubmitting(false)
                    props.setRedirect()
                }
            })
    }
})

export default formikEnhancer(InnerForm)
