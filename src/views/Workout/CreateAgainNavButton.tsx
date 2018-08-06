import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { now } from 'utils/date'
import { postWorkoutFrom } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import NavBar from 'components/NavBar'
import Button from 'components/Button'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class CreateAgainNavButton extends React.Component<Props> {
    private handleCreate = () => {
        if (!this.props.workout) {
            return
        }

        this.props.postWorkoutFrom({
            routineId: this.props.workout.routineId,
            workoutId: this.props.workout.id,
            startedAt: now()
        })
    }

    public render() {
        return (
            this.props.workout &&
            this.props.workout.completedAt && (
                <NavBar
                    rightButton={
                        <Button onClick={this.handleCreate}>
                            Perform again as New Workout
                        </Button>
                    }
                />
            )
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId)
})

const mapDispatchToProps = {
    postWorkoutFrom
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAgainNavButton)
