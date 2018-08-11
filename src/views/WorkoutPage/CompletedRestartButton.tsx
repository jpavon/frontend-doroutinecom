import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { now } from 'utils/date'
import { putWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import Button from 'components/Button'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutContainer extends React.Component<Props> {
    private handleCompleted = () => {
        if (!this.props.workout) {
            return
        }

        this.props.putWorkout(this.props.workout.id, {
            completedAt: now()
        })
    }

    private handleRestart = () => {
        if (!this.props.workout) {
            return
        }

        this.props.putWorkout(this.props.workout.id, {
            startedAt: now(),
            completedAt: null
        })
    }

    public render() {
        return this.props.workout && this.props.workout.completedAt ? (
            <Button
                onClick={this.handleRestart}
                data-e2e="workout-button-restart"
            >
                Restart
            </Button>
        ) : (
            <Button
                onClick={this.handleCompleted}
                data-e2e="workout-button-completed"
            >
                Completed
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId)
})

const mapDispatchToProps = {
    putWorkout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutContainer)
