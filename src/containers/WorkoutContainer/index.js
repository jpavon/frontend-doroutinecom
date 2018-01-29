import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { updateWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'

import ExercisesContainer from 'containers/ExercisesContainer'

import Alert from 'components/Alert'
import TopNav from 'components/TopNav'
import Workout from 'components/Workout'
import NoData from 'components/NoData'

class WorkoutContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        workoutId: PropTypes.number.isRequired,

        workout: PropTypes.object,

        updateWorkout: PropTypes.func.isRequired,
    }

    handleComplete = () => {
        this.props.updateWorkout(this.props.workout.id, {
            isCompleted: '2018-01-29',
            isPending: false
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
                        to: `/routines/${this.props.routineId}`
                    }}
                    rightLabel={this.props.workout.isPending ?
                        "Completed" :
                        "Edit"
                    }
                    right={this.props.workout.isPending ?
                        {
                            onClick: this.handleComplete,
                        } :
                        {
                            to: `/routines/${this.props.routineId}/workouts/${this.props.workoutId}/edit`
                        }
                    }
                />
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
    workout: workoutSelector(props.workoutId)(state)
})

const mapDispatchToProps = {
    updateWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
