import React, { Component } from 'react'
import { withFormik, Field } from 'formik'

class InnerForm extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.values !== this.props.values) {
            this.props.updateLift(nextProps.values.id, nextProps.values)
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
            errors,
            setFieldValue
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

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        id: props.lift.id || '',
        name: props.lift.name || '',
        rm: props.lift.rm || ''
    })
})

export default formikEnhancer(InnerForm)
