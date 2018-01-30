import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { updateWorkout, createWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import { STATUS_LOADED } from 'data/utils'
import { fetchWorkoutsData } from 'data/globals'

import ExercisesContainer from 'containers/ExercisesContainer'

import Alert from 'components/Alert'
import TopNav from 'components/TopNav'
import Workout from 'components/Workout'

class WorkoutContainer extends Component {

    static propTypes = {
        workoutId: PropTypes.number.isRequired,

        workout: PropTypes.object,

        updateWorkout: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
        fetchWorkoutsData: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.workout) {
            history.push('/workouts')
        }
    }

    handleCompleted = () => {
        this.props.updateWorkout(this.props.workout.id, {
            isCompleted: '2018-01-29',
            isPending: false
        })
    }

    handleRestart = () => {
        this.props.updateWorkout(this.props.workout.id, {
            isCompleted: null,
            isPending: true
        })
    }

    handleCreate = () => {
        this.props.createWorkout({
            routineId: this.props.workout.routineId,
            workoutId: this.props.workout.id
        }).then((resp) => {
            this.props.fetchWorkoutsData()
                .then(() => {
                    history.push(`/workouts/${resp.payload.id}`)
                })
        })
    }

    render() {
        return this.props.workout ?
            <Fragment>
                <Alert
                    type={this.props.workout.isPending ? "info" : "success"}
                    message={this.props.workout.isPending ? "In Progress" : "Completed"}
                    size="small"
                    animate={false}
                />
                <TopNav
                    title="Workout"
                    left={{
                        to: `/workouts`
                    }}
                    rightLabel={this.props.workout.isPending ?
                        "Completed" :
                        "Restart"
                    }
                    right={this.props.workout.isPending ?
                        {
                            onClick: this.handleCompleted,
                        } :
                        {
                            onClick: this.handleRestart,
                        }
                    }
                />
                {!this.props.workout.isPending &&
                    <TopNav
                        rightLabel="Perform Workout Again"
                        right={{
                            onClick: this.handleCreate,
                        }}
                    />
                }
                <Workout
                    workout={this.props.workout}
                    update={this.props.updateWorkout}
                >
                    <ExercisesContainer
                        routineId={this.props.routineId}
                        workoutId={this.props.workoutId}
                    />
                </Workout>
            </Fragment>
        : null
    }
}

const mapStateToProps = (state, props) => ({
    workout: workoutSelector(props.workoutId)(state),
    isStatusLoaded: state.workouts.fetchStatus === STATUS_LOADED,
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout,
    fetchWorkoutsData
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
