import React, { Component } from 'react'
import { Field } from 'formik'
import withForm from 'components/Form'

class Form extends Component {

    render() {
        const {
            errors
        } = this.props

        return (
            <form>
                <div className="form-field">
                    <label htmlFor="reps">Reps:</label>
                    <Field
                        id="reps"
                        name="reps"
                    />
                    {errors.reps && <div>{errors.reps}</div>}
                </div>

                <div className="form-field">
                    <label htmlFor="rmPercentage">RM percentage:</label>
                    <Field
                        id="rmPercentage"
                        name="rmPercentage"
                    />
                    {errors.rmPercentage && <div>{errors.rmPercentage}</div>}
                </div>

                <div className="form-field">
                    <label htmlFor="weight">Weight:</label>
                    <Field
                        id="weight"
                        name="weight"
                    />
                    {errors.weight && <div>{errors.weight}</div>}
                </div>
            </form>
        )
    }
}

export default withForm(Form)
