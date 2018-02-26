import * as React from 'react'
import { connect } from 'react-redux'

import { IFormatedWorkout } from 'data/workouts/types'
import { IRootState } from 'data/types'

import { completedWorkoutsSelector, pendingWorkoutsSelector } from 'data/workouts/selectors'

import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Badge from 'components/Badge'

interface IOwnProps {
}

interface IStateProps {
    completedWorkouts: IFormatedWorkout[]
    pendingWorkouts: IFormatedWorkout[]
}

interface IDispatchProps {
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class WorkoutsContainer extends React.Component<IProps> {

    render() {
        return (
            <>
                <TopNav
                    title={(
                        <>
                            In Progress <Badge number={this.props.pendingWorkouts.length} />
                        </>
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
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    completedWorkouts: completedWorkoutsSelector(state),
    pendingWorkouts: pendingWorkoutsSelector(state),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
