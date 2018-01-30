import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise, removeExercise } from 'data/exercises/actions'
import { exercisesRoutineSelector, exercisesWorkoutSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { STATUS_DELETING } from 'data/utils'

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

const routineWorkoutValidation = (props, propName, componentName) => {
    if (!props.routineId && !props.workoutId) {
        return new Error(`One of props 'routineId' or 'workoutId' was not specified in '${componentName}'.`);
    }

    if (props.routineId && props.workoutId) {
        return new Error(`Only one 'routineId' or 'workoutId' needs to be specified in '${componentName}'.`);
    }
}

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: routineWorkoutValidation,
        workoutId: routineWorkoutValidation,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        removeExercise: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        const data = {}

        if (this.props.routineId) {
            data.routineId = this.props.routineId
        }

        if (this.props.workoutId) {
            data.workoutId = this.props.workoutId
        }

        this.props.createExercise(data)
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Exercises"
                />
                <Exercises
                    create={this.handleCreate}
                >
                    {this.props.exercises.length > 0 ?
                        this.props.exercises.map((exercise, i) => (
                            <Exercise
                                id={exercise.id}
                                key={exercise.id}
                                exercise={exercise}
                                lifts={this.props.lifts}
                                update={this.props.updateExercise}
                                remove={this.props.removeExercise}
                                isDeleting={this.props.entitiesStatus[exercise.id] === STATUS_DELETING}
                            >
                                <SetsContainer
                                    exerciseId={exercise.id}
                                    isWorkout={!!this.props.workoutId}
                                />
                            </Exercise>
                        )) :
                        <NoData
                            text="No exercises created."
                        />
                    }
                </Exercises>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: props.routineId ?
        exercisesRoutineSelector(props.routineId)(state) :
        exercisesWorkoutSelector(props.workoutId)(state),
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    removeExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
