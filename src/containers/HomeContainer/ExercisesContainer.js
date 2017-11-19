import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { createSet } from 'data/sets/actions'
import { liftsSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/HomeContainer/SetsContainer'
import Button from 'components/Button'
import Panel from 'components/Panel'

import './style.css'

import { Field } from 'formik'
import withForm from 'components/Form'

const exerciseForm = ({errors, values, lifts}) => (
    <form>
        <div className="form-field">
            {lifts &&
                <Field component="select" name="liftId">
                    {!values.liftId && <option>Select a lift...</option>}
                    {lifts.map((lift, i) => (
                        <option key={i} value={lift.id}>{lift.name}</option>
                    ))}
                </Field>
            }
            {lifts < 1 && <div className="message">No lift created, create one on the top of this page.</div>}
            {errors.liftId && <div>{errors.liftId}</div>}
        </div>
    </form>
)

const ExerciseForm = withForm(exerciseForm)

class ExercisesContainer extends Component {

    static propTypes = {
        workoutId: PropTypes.number.isRequired,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        createSet: PropTypes.func.isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.exercises.length > 0 && this.props.exercises.map((exercise, i) => (
                    <div key={i} className="block-workout-lifts">
                        <div className="block-workout-lift-name">
                            <ExerciseForm
                                update={this.props.updateExercise}
                                entity={exercise}
                                lifts={this.props.lifts}
                            />
                        </div>
                        <SetsContainer exerciseId={exercise.id} />
                        <Button onClick={() => this.props.createSet(exercise.id)}>New set</Button>
                    </div>
                ))}
                <Button onClick={() => this.props.createExercise(this.props.workoutId)}>New exercise</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsSelector(state)
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    createSet
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
