import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field } from 'formik'
import withForm from 'components/Form'

class Form extends Component {

    render() {
        const {
            errors,
            values
        } = this.props

        return (
            <form>
                <div className="form-field">
                    {this.props.lifts &&
                        <Field component="select" name="liftId">
                            {!values.liftId && <option>Select a lift...</option>}
                            {this.props.lifts.map((lift, i) => (
                                <option key={i} value={lift.id}>{lift.name}</option>
                            ))}
                        </Field>
                    }
                    {this.props.lifts < 1 && <div className="message">Looks like you don't have any lift created, go to <Link to="/lifts">Lifts</Link> to create one.</div>}
                    {errors.liftId && <div>{errors.liftId}</div>}
                </div>
            </form>
        )
    }
}

export default withForm(Form)
