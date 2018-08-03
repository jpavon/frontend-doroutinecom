import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'

import {
    completedWorkoutsSelector,
    pendingWorkoutsSelector
} from 'data/workouts/selectors'

import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
import Badge from 'components/Badge'
import WorkoutContainer from 'views/Workouts/WorkoutContainer'
import { Workouts } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutsContainer extends React.Component<Props> {
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
                <Workouts data-e2e="workouts">
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

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    completedWorkouts: completedWorkoutsSelector(state),
    pendingWorkouts: pendingWorkoutsSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutsContainer)
