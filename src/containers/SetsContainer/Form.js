import React, { Component } from 'react'
import { withFormik, Field } from 'formik'
import union from 'lodash/union'
import keys from 'lodash/keys'
import filter from 'lodash/filter'

class InnerForm extends Component {

    componentWillReceiveProps(nextProps) {
        const changedKeys = (o1, o2) => {
            const k = union(keys(o1), keys(o2))
            return filter(k, function(key) {
                return o1[key] !== o2[key]
            })
        }


        if (nextProps.values !== this.props.values) {
            console.log('keys', changedKeys(nextProps.values, this.props.values))

            this.props.updateSet(nextProps.values.id, nextProps.values)
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

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        id: props.set.id || '',
        reps: props.set.reps || '',
        rmPercentage: props.set.rmPercentage || '',
        weight: props.set.weight || '',
    })
})

export default formikEnhancer(InnerForm)
