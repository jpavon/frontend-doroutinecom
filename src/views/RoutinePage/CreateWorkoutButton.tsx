import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { now } from 'utils/date'
import { postWorkoutFromRequest } from 'data/workouts/actions'
import Button from 'components/Button'

interface OwnProps {
    routineId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class CreateWorkoutButton extends React.Component<Props> {
    private handleCreateWorkout = () => {
        this.props.postWorkoutFromRequest({
            routineId: this.props.routineId,
            startedAt: now()
        })
    }

    public render() {
        return (
            <Button
                onClick={this.handleCreateWorkout}
                data-e2e="routine-button-create-workout"
            >
                Start Workout
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({})

const mapDispatchToProps = {
    postWorkoutFromRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateWorkoutButton)
