import React from 'react'
import { Field } from 'formik'
import withForm from 'components/Form'

const Form = ({errors}) => (
    <form className="lift-form">
        <div className="lift-name">
            <Field
                id="name"
                name="name"
                placeholder="Lift name"
            />
            {errors.name && <div>{errors.name}</div>}
        </div>
        <div className="lift-rm">
            <Field
                id="rm"
                name="rm"
                placeholder="Lift RM"
            />
            {errors.rm && <div>{errors.rm}</div>}
        </div>
    </form>
)

export default withForm(Form)
