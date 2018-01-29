import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise, updateExerciseOrder, removeExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { STATUS_DELETING } from 'data/utils'

import SetsEditContainer from 'containers/SetsEditContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import ExercisesEdit from 'components/ExercisesEdit/ExercisesEdit'
import ExerciseEdit from 'components/ExercisesEdit/ExerciseEdit'

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        updateExerciseOrder: PropTypes.func.isRequired,
        removeExercise: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Exercises"
                />
                <ExercisesEdit
                    create={this.props.createExercise}
                    workoutId={this.props.workoutId}
                    // updateOrder={this.props.updateExerciseOrder}
                >
                    {this.props.exercises.length > 0 ?
                        this.props.exercises.map((exercise, i) => (
                            <ExerciseEdit
                                id={exercise.id}
                                key={exercise.id}
                                exercise={exercise}
                                lifts={this.props.lifts}
                                update={this.props.updateExercise}
                                remove={this.props.removeExercise}
                                isDeleting={this.props.entitiesStatus[exercise.id] === STATUS_DELETING}
                            >
                                <SetsEditContainer exerciseId={exercise.id} routineId={this.props.routineId} />
                            </ExerciseEdit>
                        )) :
                        <NoData
                            text="No exercises created."
                        />
                    }
                </ExercisesEdit>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    updateExerciseOrder,
    removeExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
