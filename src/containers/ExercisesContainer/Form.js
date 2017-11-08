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

export default withForm(Form)
