import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { completedWorkoutsSelector, pendingWorkoutsSelector } from 'data/workouts/selectors'
import { WorkoutsType } from 'data/workouts/types'

import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Badge from 'components/Badge'

class WorkoutsContainer extends Component {

    static propTypes = {
        completedWorkouts: WorkoutsType,
        pendingWorkouts: WorkoutsType,
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title={(
                        <Fragment>
                            In Progress <Badge number={this.props.pendingWorkouts.length} />
                        </Fragment>
                    )}
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
                    title="Completed"
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
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
