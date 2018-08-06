import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { Workout } from 'data/workouts/types'
import {
    workoutDisplayNameSelector,
    workoutDisplayDaySelector,
    workoutLiftNamesSelector
} from 'data/workouts/selectors'
import { WorkoutListItem, WorkoutDay, WorkoutName } from './style'

interface OwnProps {
    workout: Workout
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class ListItem extends React.Component<Props> {
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

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    displayName: workoutDisplayNameSelector(state, props.workout.id),
    day: workoutDisplayDaySelector(state, props.workout.id),
    liftNames: workoutLiftNamesSelector(state, props.workout.id)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)
