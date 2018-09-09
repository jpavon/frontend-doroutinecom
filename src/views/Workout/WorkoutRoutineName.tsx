import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import {
    putWorkoutRequest,
    postWorkoutFromRequest
} from 'data/workouts/actions'
import {
    workoutSelector,
    workoutDisplayNameSelector,
    workoutRoutineSelector
} from 'data/workouts/selectors'
import Button from 'components/Button'
import { WorkoutRoutineNameDeleted, WorkoutRoutineName } from './style'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutContainer extends React.Component<Props> {
    public render() {
        return (
            this.props.workout && (
                <WorkoutRoutineName>
                    {this.props.routine ? (
                        <>
                            <div>Routine</div>
                            <Button
                                to={
                                    this.props.routine &&
                                    `/routines/${this.props.workout.routineId}`
                                }
                            >
                                {this.props.displayName}
                            </Button>
                        </>
                    ) : (
                        <WorkoutRoutineNameDeleted>
                            Routine for this workout has been deleted.
                        </WorkoutRoutineNameDeleted>
                    )}
                </WorkoutRoutineName>
            )
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId),
    displayName: workoutDisplayNameSelector(state, props.workoutId),
    routine: workoutRoutineSelector(state, props.workoutId)
})

const mapDispatchToProps = {
    postWorkoutFromRequest,
    putWorkoutRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutContainer)
