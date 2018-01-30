import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { completedWorkoutsSelector, pendingWorkoutsSelector } from 'data/workouts/selectors'

import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'

class WorkoutsContainer extends Component {

    static propTypes = {
        completedWorkouts: PropTypes.array.isRequired,
        pendingWorkouts: PropTypes.array.isRequired,

        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    // handleCreate = () => {
    //     this.props.createWorkout()
    //         .then((resp) => {
    //             history.push(`/workouts/${resp.payload.id}`)
    //         })
    // }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="In Progress Workouts"
                />
                <Workouts>
                    {this.props.pendingWorkouts.length > 0 ?
                        this.props.pendingWorkouts.map((workout, i) => (
                            <Workout
                                key={workout.id}
                                workout={workout}
                            />
                        )) :
                        <NoData
                            text="You can start a workout from a routine or an already completed workout."
                        />
                    }
                </Workouts>
                <TopNav
                    title="Completed Workouts"
                />
                <Workouts>
                    {this.props.completedWorkouts.length > 0 ?
                        this.props.completedWorkouts.map((workout, i) => (
                            <Workout
                                key={workout.id}
                                workout={workout}
                            />
                        )) :
                        <NoData
                            text="No completed workouts."
                        />
                    }
                </Workouts>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    completedWorkouts: completedWorkoutsSelector(state),
    pendingWorkouts: pendingWorkoutsSelector(state),
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout,
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
