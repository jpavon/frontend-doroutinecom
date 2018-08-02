import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import history from 'utils/history'
import { now } from 'utils/date'
import {
    putWorkout,
    postWorkoutFrom,
    deleteWorkout
} from 'data/workouts/actions'
import {
    workoutSelector,
    workoutDisplayNameSelector,
    workoutRoutineSelector,
    workoutDisplayDurationSelector
} from 'data/workouts/selectors'
import { statusConstants } from 'data/constants'
import Alert from 'components/Alert'
import NavBar from 'components/NavBar'
import Timer from 'components/Timer'
import Button from 'components/Button'
import AutoSaveForm from 'components/AutoSaveForm'
import Datetime from 'components/AutoSaveForm/Datetime'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import ExercisesContainer from 'views/shared/Exercises/ExercisesContainer'
import {
    Workout,
    WorkoutRoutineNameDeleted,
    WorkoutDates,
    WorkoutRoutineName
} from 'views/Workout/style'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class WorkoutContainer extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.workout) {
            history.replace('/workouts')
        }
    }

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

    private handleRemove = () => {
        if (!this.props.workout) {
            return
        }

        if (window.confirm('Are you sure you want to delete this workout?')) {
            this.props.deleteWorkout(this.props.workout.id)
        }
    }

    public render() {
        return this.props.workout ? (
            <>
                {this.props.displayName && (
                    <Helmet>
                        <title>{this.props.displayName}</title>
                    </Helmet>
                )}
                <Alert
                    type={this.props.workout.completedAt ? 'success' : 'info'}
                    message={
                        this.props.workout.completedAt ? (
                            <>
                                Completed{' '}
                                {this.props.duration &&
                                    'in ' + this.props.duration}
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
                <NavBar
                    title="Edit workout"
                    leftButton={
                        <Button to="/workouts" icon="back">
                            Back
                        </Button>
                    }
                    rightButton={
                        this.props.workout.completedAt ? (
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
                />
                {this.props.workout.completedAt && (
                    <NavBar
                        rightButton={
                            <Button onClick={this.handleCreate}>
                                Perform again as New Workout
                            </Button>
                        }
                    />
                )}
                <Workout data-e2e="workout">
                    <WorkoutRoutineName>
                        {this.props.routine ? (
                            <>
                                <div>Routine</div>
                                <Button
                                    to={
                                        this.props.routine &&
                                        `/routines/${
                                            this.props.workout.routineId
                                        }`
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
                    <AutoSaveForm
                        key={`${this.props.workout.id}-${
                            this.props.workout.completedAt
                                ? 'completed'
                                : 'notcompleted'
                        }`}
                        initialValues={this.props.workout}
                        update={this.props.putWorkout}
                        render={() => (
                            <>
                                {!this.props.routine && (
                                    <Field label="Name" id="name">
                                        <Input id="name" name="name" />
                                    </Field>
                                )}
                                {this.props.workout.completedAt && (
                                    <WorkoutDates>
                                        <Field
                                            label="Started at"
                                            id="startedAt"
                                        >
                                            <Datetime
                                                id="startedAt"
                                                name="startedAt"
                                            />
                                        </Field>

                                        <Field
                                            label="Completed at"
                                            id="completedAt"
                                        >
                                            <Datetime
                                                id="completedAt"
                                                name="completedAt"
                                            />
                                        </Field>
                                    </WorkoutDates>
                                )}
                            </>
                        )}
                    />
                    <ExercisesContainer
                        id={this.props.workoutId}
                        entity="workout"
                    />
                    <AutoSaveForm
                        initialValues={this.props.workout}
                        update={this.props.putWorkout}
                        render={({ values }) => (
                            <Field
                                label="Additional Notes"
                                id={`notes${values.id}`}
                            >
                                <Textarea
                                    id={`notes${values.id}`}
                                    name="notes"
                                    placeholder="Type any extra exercises or annotations"
                                />
                            </Field>
                        )}
                    />
                </Workout>
                <NavBar
                    rightButton={
                        <Button
                            onClick={this.handleRemove}
                            danger={true}
                            disabled={this.props.isDeleting}
                            data-e2e="workout-button-delete"
                        >
                            Delete Workout
                        </Button>
                    }
                />
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId),
    displayName: workoutDisplayNameSelector(state, props.workoutId),
    duration: workoutDisplayDurationSelector(state, props.workoutId),
    routine: workoutRoutineSelector(state, props.workoutId),
    isStatusLoaded: state.workouts.status === statusConstants.STATUS_LOADED,
    isDeleting:
        state.workouts.entitiesStatus[props.workoutId] ===
        statusConstants.STATUS_DELETING
})

const mapDispatchToProps = {
    postWorkoutFrom,
    putWorkout,
    deleteWorkout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutContainer)
