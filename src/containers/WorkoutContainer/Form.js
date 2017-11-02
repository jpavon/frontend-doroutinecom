import React from 'react'
import { withFormik } from 'formik'

const InnerForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
    <form onSubmit={handleSubmit}>
        <input
            type="reps"
            name="reps"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.reps}
        />
        {touched.reps && errors.reps && <div>{errors.reps}</div>}
        <input
            type="weight"
            name="weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
        />
        {touched.weight && errors.weight && <div>{errors.weight}</div>}
        <input
            type="rmPercentage"
            name="rmPercentage"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rmPercentage}
        />
        {touched.rmPercentage && errors.rmPercentage && <div>{errors.rmPercentage}</div>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
)

const Form = withFormik({
    mapPropsToValues: props => ({ reps: '', weight: '', rmPercentage: '' }),
    handleSubmit: (values, { props, setSubmitting, setErrors, /* setValues, setStatus, and other goodies */ }) => {
        props.createWorkout(values)
            .then((data) => {
                if (data.error) {
                    setSubmitting(false)
                    setErrors({name: 'testst'})
                    console.log('test here')
                } else {
                    setSubmitting(false)
                    console.log('test here 2', data)
                }
            })
    }
})(InnerForm)

export default Form
