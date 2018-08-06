import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import {
    workoutSelector,
    workoutDisplayDurationSelector
} from 'data/workouts/selectors'
import AlertComponent from 'components/Alert'
import Timer from 'components/Timer'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Alert extends React.Component<Props> {
    public render() {
        return (
            this.props.workout && (
                <AlertComponent
                    type={this.props.workout.completedAt ? 'success' : 'info'}
                    message={
                        this.props.workout.completedAt ? (
                            <>
                                Completed
                                {this.props.duration &&
                                    ` in ${this.props.duration}`}
                            </>
                        ) : (
                            <>
                                In Progress{' '}
                                <Timer start={this.props.workout.startedAt} />
                            </>
                        )
                    }
                    size="small"
                    animate={false}
                />
            )
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId),
    duration: workoutDisplayDurationSelector(state, props.workoutId)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Alert)
