import React, { Component } from 'react'
import { withFormik, Field } from 'formik'

class InnerForm extends Component {

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
                {errors.name && <div>{errors.name}</div>}

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
    })
})

export default formikEnhancer(InnerForm)
