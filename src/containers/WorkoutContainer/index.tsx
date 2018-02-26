import * as React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IFormatedWorkout } from 'data/workouts/types'
import { IRootState } from 'data/types'

import history from 'utils/history'
import { now } from 'utils/date'
import { updateWorkout, createWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import { STATUS_LOADED, STATUS_DELETING } from 'data/utils'
import { fetchWorkoutsData } from 'data/globals'

import ExercisesContainer from 'containers/ExercisesContainer'

import Alert from 'components/Alert'
import TopNav from 'components/TopNav'
import Workout from 'components/Workout'
import Timer from 'components/Timer'

interface IOwnProps {
    workoutId: number
}

interface IStateProps {
    workout?: IFormatedWorkout | null
    isStatusLoaded: boolean
    isDeleting: boolean
}

interface IDispatchProps {
    updateWorkout: (id: number, data: {}) => void
    createWorkout: (data: {}) => void
    removeWorkout: (id: number) => void
    fetchWorkoutsData: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class WorkoutContainer extends React.Component<IProps> {

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.workout) {
            history.replace('/workouts')
        }
    }

    handleCompleted = () => {
        if (this.props.workout) {
            this.props.updateWorkout(this.props.workout.id, {
                completedAt: now()
            })
        }
    }

    handleRestart = () => {
        if (this.props.workout) {
            this.props.updateWorkout(this.props.workout.id, {
                startedAt: now(),
                completedAt: null
            })
        }
    }

    handleCreate = () => {
        if (this.props.workout) {
            this.props.createWorkout({
                routineId: this.props.workout.routineId,
                workoutId: this.props.workout.id,
                startedAt: now()
            })
        }
        // .then((resp) => {
        //     this.props.fetchWorkoutsData()
        //         .then(() => {
        //             history.push(`/workouts/${resp.payload.id}`)
        //         })
        // })
    }

    handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this workout?')) {
            if (this.props.workout) {
                this.props.removeWorkout(this.props.workout.id)
            }
                // .then(() => {
                //     history.push('/workouts')
                // })
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
                    update={this.props.updateWorkout}
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
                        className: 'workout-button-remove'
                    }}
                />
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    workout: workoutSelector(props.workoutId)(state),
    isStatusLoaded: state.workouts.fetchStatus === STATUS_LOADED,
    isDeleting: state.workouts.entitiesStatus[props.workoutId] === STATUS_DELETING
})

const mapDispatchToProps: IDispatchProps = {
    createWorkout,
    updateWorkout,
    removeWorkout,
    fetchWorkoutsData
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
