import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { IWorkout } from 'data/workouts/types'

import Workout from 'components/Workouts/Workout'
import {
    workoutDisplayNameSelector,
    workoutDisplayDaySelector,
    workoutLiftNamesSelector
} from 'data/workouts/selectors'

interface IOwnProps {
    workout: IWorkout
}

interface IStateProps {
    displayName: string
    day: string | null
    liftNames: string[]
}

interface IDispatchProps {}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class WorkoutsContainer extends React.Component<IProps> {
    public render() {
        return (
            <Workout
                workout={this.props.workout}
                liftNames={this.props.liftNames}
                day={this.props.day}
                displayName={this.props.displayName}
            />
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    displayName: workoutDisplayNameSelector(state, props.workout.id),
    day: workoutDisplayDaySelector(state, props.workout.id),
    liftNames: workoutLiftNamesSelector(state, props.workout.id)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutsContainer)
