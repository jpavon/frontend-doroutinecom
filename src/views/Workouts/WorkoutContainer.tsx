import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { IWorkout } from 'data/workouts/types'
import {
    workoutDisplayNameSelector,
    workoutDisplayDaySelector,
    workoutLiftNamesSelector
} from 'data/workouts/selectors'
import { WorkoutListItem, WorkoutDay, WorkoutName } from 'views/Workouts/style'

interface OwnProps {
    workout: IWorkout
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutContainer extends React.Component<Props> {
    public render() {
        return (
            <WorkoutListItem
                to={`/workouts/${this.props.workout.id}`}
                info={this.props.liftNames}
                data-e2e="workout-list-item"
            >
                {this.props.day && <WorkoutDay>{this.props.day}</WorkoutDay>}
                <WorkoutName>{this.props.displayName}</WorkoutName>
            </WorkoutListItem>
        )
    }
}

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    displayName: workoutDisplayNameSelector(state, props.workout.id),
    day: workoutDisplayDaySelector(state, props.workout.id),
    liftNames: workoutLiftNamesSelector(state, props.workout.id)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutContainer)
