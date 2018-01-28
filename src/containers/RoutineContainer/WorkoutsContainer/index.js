import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { templateWorkoutsSelector, completedWorkoutsSelector, pendingWorkoutsSelector } from 'data/workouts/selectors'
import { STATUS_DELETING } from 'data/utils'
import scrollTo from 'utils/scrollTo'

import TopNav from 'components/TopNav'
import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'

class WorkoutsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        templateWorkouts: PropTypes.array.isRequired,
        completedWorkouts: PropTypes.array.isRequired,
        pendingWorkouts: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

        createWorkout: PropTypes.func.isRequired,
        // updateWorkout: PropTypes.func.isRequired,
        // removeWorkout: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createWorkout({
            routineId: this.props.routineId,
            isTemplate: true
        })
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Workouts"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate
                    }}
                />
                <Workouts>
                    {this.props.templateWorkouts.length > 0 ?
                        this.props.templateWorkouts.map((workout, i) => (
                            <Workout
                                key={workout.id}
                                index={i}
                                workout={workout}
                                routineId={this.props.routineId}
                            />
                        )) :
                        <NoData
                            text="No workouts created. Create and customize a workout to start logging your progress."
                        />
                    }
                </Workouts>

                <TopNav
                    title="Pending Workouts"
                />
                <Workouts>
                    {this.props.pendingWorkouts.length > 0 ?
                        this.props.pendingWorkouts.map((workout, i) => (
                            <Workout
                                key={workout.id}
                                index={i}
                                workout={workout}
                                routineId={this.props.routineId}
                            />
                        )) :
                        <NoData
                            text="No workout created."
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
                                index={i}
                                workout={workout}
                                routineId={this.props.routineId}
                            />
                        )) :
                        <NoData
                            text="No workouts completed."
                        />
                    }
                </Workouts>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    templateWorkouts: templateWorkoutsSelector(props.routineId)(state),
    completedWorkouts: completedWorkoutsSelector(props.routineId)(state),
    pendingWorkouts: pendingWorkoutsSelector(props.routineId)(state),
    entitiesStatus: state.workouts.entitiesStatus
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
