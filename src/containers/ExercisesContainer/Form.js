import React, { Component } from 'react'
import { withFormik, Field } from 'formik'

class InnerForm extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.values !== this.props.values) {
            this.props.updateExercise(nextProps.values.id, nextProps.values)
                .then((payload) => {
                    if (payload.error) {
                        this.props.setErrors(payload.error.errors)
                    } else {
                        this.props.setErrors({})
                    }
                })
        }
    }

    render() {
        const {
            errors
        } = this.props

        return (
            <form>
                <div className="form-field">
                    {this.props.lifts &&
                        <Field component="select" name="liftId">
                            {this.props.lifts.map((lift, i) => (
                                <option key={i} value={lift.id}>{lift.name}</option>
                            ))}
                        </Field>
                    }
                    {errors.liftId && <div>{errors.liftId}</div>}
                </div>
            </form>
        )
    }
}

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        id: props.exercise.id || '',
        liftId: props.exercise.liftId || '',
    })
})

export default formikEnhancer(InnerForm)
