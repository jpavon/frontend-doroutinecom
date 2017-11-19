import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field } from 'formik'
import withForm from 'components/Form'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import Button from 'components/Button'

import Input from 'components/Input'

const setForm = ({errors, values, lift}) => (
    <form>
        <div className="row">
            <div className="col col--1of2 form-field">
                <Input
                    name="rmPercentage"
                    value={values.rmPercentage}
                    errors={errors.rmPercentage}
                />
            </div>

            <div className="col col--1of2 form-field">
                <Input
                    name="reps"
                    value={values.reps}
                    errors={errors.reps}
                />
            </div>
        </div>
    </form>
)

const SetForm = withForm(setForm)

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,

        ui: PropTypes.object.isRequired,
        sets: PropTypes.array.isRequired,
        lift: PropTypes.object.isRequired,

        createSet: PropTypes.func.isRequired,
        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

    render() {
        const round5 = (x) => (Math.ceil(x/5)*5)

        return (
            <div>
                {this.props.sets.map((set, i) => (
                    <div key={i} className="block-workout-lift-set">
                        {this.props.ui.isEditing ?
                            <SetForm
                                i={i}
                                entity={set}
                                update={this.props.updateSet}
                                lift={this.props.lift}
                            />
                        :
                            <div>
                                {round5(set.rmPercentage * this.props.lift.rm / 100)}kg x{set.reps}
                            </div>
                        }
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    ui: state.ui,
    lift: exerciseLiftSelector(props.exerciseId)(state)
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)
