import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { deleteWorkoutRequest } from 'data/workouts/actions'
import { Status } from 'data/types'

import Button from 'components/Button'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutContainer extends React.Component<Props> {
    private handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this workout?')) {
            this.props.deleteWorkoutRequest(this.props.workoutId)
        }
    }

    public render() {
        return (
            <Button
                onClick={this.handleRemove}
                danger={true}
                disabled={this.props.isDeleting}
                data-e2e="workout-button-delete"
            >
                Delete Workout
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isDeleting:
        state.workouts.entitiesStatus[props.workoutId] ===
        Status.STATUS_DELETING
})

const mapDispatchToProps = {
    deleteWorkoutRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutContainer)
