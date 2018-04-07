import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import { IFormatedWorkout } from 'data/workouts/types'

import history from 'utils/history'
import { now } from 'utils/date'
import { putWorkout, postWorkoutFrom, deleteWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import constants from 'data/constants'

import ExercisesContainer from 'containers/ExercisesContainer'

import Alert from 'components/Alert'
import TopNav from 'components/TopNav'
import Workout from 'components/Workout'
import Timer from 'components/Timer'

interface IOwnProps {
    workoutId: number
}

interface IStateProps {
    workout: IFormatedWorkout | null
    isStatusLoaded: boolean
    isDeleting: boolean
}

interface IDispatchProps {
    putWorkout: typeof putWorkout
    postWorkoutFrom: typeof postWorkoutFrom
    deleteWorkout: typeof deleteWorkout
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class WorkoutContainer extends React.Component<IProps> {

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.workout) {
            history.replace('/workouts')
        }
    }

    handleCompleted = () => {
        if (!this.props.workout) { return }

        this.props.putWorkout(this.props.workout.id, {
            completedAt: now()
        })
    }

    handleRestart = () => {
        if (!this.props.workout) { return }

        this.props.putWorkout(this.props.workout.id, {
            startedAt: now(),
            completedAt: null
        })
    }

    handleCreate = () => {
        if (!this.props.workout) { return }

        this.props.postWorkoutFrom({
            routineId: this.props.workout.routineId,
            workoutId: this.props.workout.id,
            startedAt: now()
        })
    }

    handleRemove = () => {
        if (!this.props.workout) { return }

        if (window.confirm('Are you sure you want to delete this workout?')) {
            this.props.deleteWorkout(this.props.workout.id)
        }
    }

    render() {
        return this.props.workout ? (
            <>
                {this.props.workout.displayName &&
                    <Helmet>
                        <title>{this.props.workout.displayName}</title>
                    </Helmet>
                }
                <Alert
                    type={this.props.workout.completedAt ? 'success' : 'info'}
                    message={
                        this.props.workout.completedAt ?
                            (<>
                                Completed {this.props.workout.duration && 'in ' + this.props.workout.duration}
                            </>) :
                            (<>
                                In Progress <Timer start={this.props.workout.startedAt} />
                            </>)
                    }
                    size="small"
                    animate={false}
                />
                <TopNav
                    title="Workout"
                    left={{
                        to: `/workouts`
                    }}
                    rightLabel={this.props.workout.completedAt ?
                        'Restart' :
                        'Completed'
                    }
                    right={this.props.workout.completedAt ?
                        {
                            onClick: this.handleRestart,
                            className: 'workout-button-restart'
                        } :
                        {
                            onClick: this.handleCompleted,
                            className: 'workout-button-completed'
                        }
                    }
                />
                {this.props.workout.completedAt &&
                    <TopNav
                        rightLabel="Perform again as New Workout"
                        right={{
                            onClick: this.handleCreate,
                        }}
                    />
                }
                <Workout
                    workout={this.props.workout}
                    update={this.props.putWorkout}
                >
                    <ExercisesContainer
                        workoutId={this.props.workoutId}
                    />
                </Workout>
                <TopNav
                    rightLabel="Delete Workout"
                    right={{
                        onClick: this.handleRemove,
                        danger: true,
                        disabled: this.props.isDeleting,
                        className: 'workout-button-delete'
                    }}
                />
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    workout: workoutSelector(props.workoutId)(state),
    isStatusLoaded: state.workouts.fetchStatus === constants.STATUS_LOADED,
    isDeleting: state.workouts.entitiesStatus[props.workoutId] === constants.STATUS_DELETING
})

const mapDispatchToProps: IDispatchProps = {
    postWorkoutFrom,
    putWorkout,
    deleteWorkout,
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
