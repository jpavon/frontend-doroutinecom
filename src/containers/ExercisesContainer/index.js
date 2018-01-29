import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

class ExercisesContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,
    }

    render() {
        return (
            <Fragment>
                <Exercises
                    create={this.props.createExercise}
                    workoutId={this.props.workoutId}
                >
                    {this.props.exercises.length > 0 &&
                        this.props.exercises.map((exercise, i) => (
                            <Exercise
                                key={exercise.id}
                                lift={this.props.lifts.find((lift) => lift.id === exercise.liftId)}
                            >
                                <SetsContainer exerciseId={exercise.id} routineId={this.props.routineId} />
                            </Exercise>
                        ))
                    }
                </Exercises>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsSelector(state),
})

const mapDispatchToProps = {
    updateExercise,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
