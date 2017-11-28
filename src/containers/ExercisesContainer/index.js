import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise, removeExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/SetsContainer'

import withForm from 'components/Form/withForm'
import Select from 'components/Form/Select'
import Button from 'components/Button'

const exerciseForm = ({lifts}) => (
    <Select
        name="liftId"
        options={lifts || []}
        defaultOptionMessage="Select a lift..."
        noOptionsMessage="No lift created, create one on the top of this page."
    />
)

const ExerciseForm = withForm(exerciseForm)

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                {this.props.exercises.length > 0 && this.props.exercises.map((exercise, i) => (
                    <div key={exercise.id} className="block-workout-lifts">
                        <div className="block-workout-lift-name">
                            <ExerciseForm
                                update={this.props.updateExercise}
                                data={exercise}
                                lifts={this.props.lifts}
                            />
                        </div>
                        <SetsContainer exerciseId={exercise.id} />
                        <Button danger onClick={() => this.props.removeExercise(exercise.id)}>Remove exercise</Button>
                    </div>
                ))}
                <div className="exercise-button-create">
                    <Button onClick={() => this.props.createExercise(this.props.workoutId)}>New exercise</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsSelector(props.routineId)(state)
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    removeExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
