import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => (Object.keys(props.entity).reduce((prev, current) => {
        prev[current] = props.entity[current] || ''
        return prev
    }, {}))
})

export default function withForm(WrappedComponent) {
    class WithForm extends Component {

        static propTypes = {
            entity: PropTypes.object.isRequired,
            update: PropTypes.func.isRequired
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.values !== this.props.values) {

                const changedKey = Object.keys(nextProps.values).filter((key) => (nextProps.values[key] !== this.props.values[key]))[0]
                // console.log(Object.keys(nextProps.values).filter((key) => (nextProps.values[key] !== this.props.values[key])))
                this.props.update(nextProps.values.id, { [changedKey]: nextProps.values[changedKey] })
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
            return <WrappedComponent {...this.props}/>
        }
    }

    return formikEnhancer(WithForm)
}
