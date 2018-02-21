import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise, removeExercise } from 'data/exercises/actions'
import { exercisesRoutineSelector, exercisesWorkoutSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { STATUS_DELETING } from 'data/utils'
import { ExercisesType, ExerciseRoutineAndWorkoutIdType } from 'data/exercises/types'
import { LiftsType } from 'data/lifts/types'
import { StatusType } from 'data/types'

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: ExerciseRoutineAndWorkoutIdType,
        workoutId: ExerciseRoutineAndWorkoutIdType,

        exercises: ExercisesType,
        lifts: LiftsType,
        entitiesStatus: PropTypes.objectOf(StatusType),

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        removeExercise: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.isRoutine = !!this.props.routineId
        this.isWorkout = !!this.props.workoutId

        this.state = {
            isRemoveButtonsVisible: this.isRoutine ? true : false
        }
    }

    handleToggleRemoveButtons = () => {
        this.setState((prevState) => ({
            isRemoveButtonsVisible: !prevState.isRemoveButtonsVisible
        }))
    }

    handleCreate = () => {
        const data = {}

        if (this.isRoutine) {
            data.routineId = this.props.routineId
        }

        if (this.isWorkout) {
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
                                isRemoveButtonsVisible={this.state.isRemoveButtonsVisible}
                            >
                                <SetsContainer
                                    exerciseId={exercise.id}
                                    liftId={exercise.liftId}
                                    isWorkout={this.isWorkout}
                                    isRemoveButtonsVisible={this.state.isRemoveButtonsVisible}
                                    toggleRemoveButtons={this.handleToggleRemoveButtons}
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
    entitiesStatus: state.exercises.entitiesStatus,
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    removeExercise,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
