import React, { Component } from 'react'
import { Field } from 'formik'
import withForm from 'components/Form'

import Input from 'components/Input'

class Form extends Component {

    render() {
        const {
            errors,
            values,
            lift,
            setFieldValue
        } = this.props

        return (
            <form>
                <div className="row">
                    <div className="col col--1of3 form-field">
                        <Input
                            name="reps"
                            value={values.reps}
                            errors={errors.reps}
                            item={{
                                name: 'Reps',
                                position: 'right'
                            }}
                        />
                    </div>

                    {values.isRmPercentageRequired &&
                        <div className="col col--1of3 form-field">
                            <Input
                                name="rmPercentage"
                                value={values.rmPercentage}
                                errors={errors.rmPercentage}
                                item={{
                                    name: 'RM',
                                    position: 'right'
                                }}
                            />
                        </div>
                    }
                    {values.isRmPercentageRequired &&
                        <div className="col col--1of3 form-field">
                            <input
                                value={values.rmPercentage * lift.rm / 100}
                                disabled
                            />
                        </div>
                    }

                    {!values.isRmPercentageRequired &&
                        <div className="col col--1of3 form-field">
                            <Input
                                name="weight"
                                value={values.weight}
                                errors={errors.weight}
                                item={{
                                    name: 'Weight',
                                    position: 'right'
                                }}
                                disabled={values.isRmPercentageRequired}
                            />
                        </div>
                    }

                    <div className="col">
                        <Field
                            type="checkbox"
                            name="isRmPercentageRequired"
                            checked={values.isRmPercentageRequired}
                        />
                        <small>Use rm percentage to calculate weight?</small>
                    </div>
                </div>
            </form>
        )
    }
}

export default withForm(Form)
