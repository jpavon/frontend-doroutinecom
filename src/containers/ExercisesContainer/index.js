import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise, updateExerciseOrder, removeExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { liftsRoutineSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/SetsContainer'

import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'
import DragnDrop from 'components/DragnDrop'

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        updateExerciseOrder: PropTypes.func.isRequired,
        removeExercise: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Exercises createExercise={this.props.createExercise} workoutId={this.props.workoutId}>
                {this.props.exercises.length > 0 &&
                    <DragnDrop
                        updateOrder={this.props.updateExerciseOrder}
                    >
                        {this.props.exercises.map((exercise, i) => (
                            <Exercise
                                id={exercise.id}
                                key={exercise.id}
                                exercise={exercise}
                                lifts={this.props.lifts}
                                updateExercise={this.props.updateExercise}
                                removeExercise={this.props.removeExercise}
                            >
                                <SetsContainer exerciseId={exercise.id} />
                            </Exercise>
                        ))}
                    </DragnDrop>
                }
            </Exercises>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsRoutineSelector(props.routineId)(state)
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    updateExerciseOrder,
    removeExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
