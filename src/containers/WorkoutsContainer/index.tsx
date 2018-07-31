import * as React from 'react'
import { connect } from 'react-redux'

import { IWorkout } from 'data/workouts/types'
import { IRootState } from 'data/types'

import {
    completedWorkoutsSelector,
    pendingWorkoutsSelector
} from 'data/workouts/selectors'

import Workouts from 'components/Workouts/Workouts'
import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
import Badge from 'components/Badge'
import WorkoutContainer from 'containers/WorkoutsContainer/WorkoutContainer'

interface IOwnProps {}

interface IStateProps {
    completedWorkouts: IWorkout[]
    pendingWorkouts: IWorkout[]
}

interface IDispatchProps {}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class WorkoutsContainer extends React.Component<IProps> {
    public render() {
        return (
            <>
                <NavBar
                    title={
                        <>
                            In progress{' '}
                            <Badge value={this.props.pendingWorkouts.length} />
                        </>
                    }
                />
                <Workouts>
                    {this.props.pendingWorkouts.length > 0 ? (
                        this.props.pendingWorkouts.map((workout, i) => (
                            <WorkoutContainer
                                key={workout.id}
                                workout={workout}
                            />
                        ))
                    ) : (
                        <NoData text="You can start a workout from a routine or an already completed workout." />
                    )}
                </Workouts>
                <NavBar title="Completed" />
                <Workouts>
                    {this.props.completedWorkouts.length > 0 ? (
                        this.props.completedWorkouts.map((workout, i) => (
                            <WorkoutContainer
                                key={workout.id}
                                workout={workout}
                            />
                        ))
                    ) : (
                        <NoData text="No completed workouts." />
                    )}
                </Workouts>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    completedWorkouts: completedWorkoutsSelector(state),
    pendingWorkouts: pendingWorkoutsSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutsContainer)
