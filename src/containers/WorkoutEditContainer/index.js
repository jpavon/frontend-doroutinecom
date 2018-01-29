import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'

import ExercisesEditContainer from 'containers/ExercisesEditContainer'

import TopNav from 'components/TopNav'
import WorkoutEdit from 'components/WorkoutEdit'
import NoData from 'components/NoData'

class WorkoutEditContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        workout: PropTypes.object,

        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    handleRemove = () => {
        this.props.removeWorkout(this.props.workout.id)
            .then(() => {
                history.push(`/routines/${this.props.routineId}`)
            })
    }

    handleStart = () => {
        this.props.updateWorkout(this.props.workout.id, {
            isPending: true
        }).then(() => {
            history.push(`/routines/${this.props.routineId}/workouts/${this.props.workoutId}`)
        })
    }

    render() {
        const title = this.props.workout && this.props.workout.isTemplate ?
            'Workout' :
            'Edit Workout'

        return this.props.workout ?
            <Fragment>
                <TopNav
                    title={title}
                    left={{
                        to: `/routines/${this.props.routineId}`
                    }}
                    rightLabel={this.props.workout.isTemplate && 'Start'}
                    right={this.props.workout.isTemplate && {
                        onClick: this.handleStart
                    }}
                />
                <WorkoutEdit
                    workout={this.props.workout}
                    update={this.props.updateWorkout}
                >
                    <ExercisesEditContainer
                        routineId={this.props.routineId}
                        workoutId={this.props.workoutId}
                    />
                </WorkoutEdit>
                <TopNav
                    rightLabel="Remove Workout"
                    right={{
                        onClick: this.handleRemove,
                        danger: true
                    }}
                />
            </Fragment>
        : null
    }
}

const mapStateToProps = (state, props) => ({
    workout: workoutSelector(props.workoutId)(state)
})

const mapDispatchToProps = {
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEditContainer)
