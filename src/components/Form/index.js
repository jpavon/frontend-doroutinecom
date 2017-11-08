import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import union from 'lodash/union'
import keys from 'lodash/keys'
import filter from 'lodash/filter'

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => (Object.keys(props.entity).reduce((prev, current) => {
        prev[current] = props.entity[current] || ''
        return prev
    }, {}))
})

export default function withForm(WrappedComponent) {
    class Enhancer extends Component {
        static propTypes = {
            entity: PropTypes.object.isRequired,
            update: PropTypes.func.isRequired
        }

        constructor(props) {
            super(props)

            this.state = {
                test: ''
            }
        }

        componentWillReceiveProps(nextProps) {
            const changedKeys = (o1, o2) => {
                const k = union(keys(o1), keys(o2))
                return filter(k, function(key) {
                    return o1[key] !== o2[key]
                })
            }

            if (nextProps.values !== this.props.values) {
                const changedKey = changedKeys(nextProps.values, this.props.values)[0]

                this.props.update(nextProps.values.id, { [changedKey]: nextProps.values[changedKey]})
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
            const newProps = {
                test: ''
            }

            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }

    return formikEnhancer(Enhancer)
}
