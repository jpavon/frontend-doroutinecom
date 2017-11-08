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
                <label htmlFor="name">Lift name:</label>
                <Field
                    id="name"
                    name="name"
                />
                {errors.name && <div>{errors.name}</div>}

                <label htmlFor="rm">Lift rm:</label>
                <Field
                    id="rm"
                    name="rm"
                />
                {errors.rm && <div>{errors.rm}</div>}
            </form>
        )
    }
}

export default withForm(Form)
