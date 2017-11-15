import React, { Component } from 'react'
import { Field } from 'formik'
import withForm from 'components/Form'

import Input from 'components/Input'

class Form extends Component {

    render() {
        const {
            errors,
            values
        } = this.props

        return (
            <form>
                <div className="row">
                    <div className="col col--1of3 form-field">
                        <Input
                            name="reps"
                            value={values.reps}
                            error={errors.reps}
                            item={{
                                name: 'Reps',
                                position: 'right'
                            }}
                        />
                    </div>

                    <div className="col col--1of3 form-field">
                        <Input
                            name="rmPercentage"
                            value={values.rmPercentage}
                            error={errors.rmPercentage}
                            item={{
                                name: 'RM',
                                position: 'right'
                            }}
                        />
                    </div>

                    <div className="col col--1of3 form-field">
                        <Input
                            name="weight"
                            value={values.weight}
                            error={errors.weight}
                            item={{
                                name: 'Weight',
                                position: 'right'
                            }}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default withForm(Form)
