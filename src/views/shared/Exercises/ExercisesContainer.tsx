import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'

import {
    postExercise,
    putExercise,
    deleteExercise
} from 'data/exercises/actions'
import {
    exercisesRoutineSelector,
    exercisesWorkoutSelector
} from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { statusConstants } from 'data/constants'
import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'
import SetsContainer from 'views/shared/Sets/SetsContainer'
import {
    Exercises,
    ExerciseTransition,
    ExercisesButtonCreate,
    ExerciseButtonDelete,
    ExerciseLift
} from 'views/shared/Exercises/style'

interface OwnProps {
    id: number
    entity: 'routine' | 'workout'
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

interface State {
    isRemoveButtonsVisible: boolean
}

class ExercisesContainer extends React.Component<Props, State> {
    public readonly state = {
        isRemoveButtonsVisible: this.props.entity === 'routine' ? true : false
    }

    private handleToggleRemoveButtons = () => {
        this.setState((prevState) => ({
            isRemoveButtonsVisible: !prevState.isRemoveButtonsVisible
        }))
    }

    private handleCreate = () => {
        let key: string

        if (this.props.entity === 'routine') {
            key = 'routineId'
        } else {
            key = 'workoutId'
        }

        this.props.postExercise({
            [key]: this.props.id
        })
    }

    public render() {
        return (
            <>
                <NavBar title="Exercises" />
                <Exercises>
                    <ExerciseTransition e2e="exercise">
                        {this.props.exercises.length > 0 ? (
                            this.props.exercises.map((exercise, i) => (
                                <React.Fragment key={exercise.id}>
                                    <AutoSaveForm
                                        update={this.props.putExercise}
                                        initialValues={exercise}
                                        render={({ values }) => (
                                            <ExerciseLift>
                                                <Select
                                                    id="liftId"
                                                    name="liftId"
                                                    options={this.props.lifts}
                                                    defaultOptionMessage="Select a lift"
                                                    noOptionsMessage="No lift created."
                                                    data-e2e="exercise-lift-select"
                                                />
                                                {values.liftId ? (
                                                    <Button
                                                        to={`/lifts/${
                                                            values.liftId
                                                        }`}
                                                    >
                                                        Info
                                                    </Button>
                                                ) : (
                                                    <Button to="/lifts">
                                                        Create
                                                    </Button>
                                                )}
                                            </ExerciseLift>
                                        )}
                                    />
                                    <SetsContainer
                                        exerciseId={exercise.id}
                                        liftId={exercise.liftId}
                                        isWorkout={
                                            this.props.entity === 'workout'
                                        }
                                        isRemoveButtonsVisible={
                                            this.state.isRemoveButtonsVisible
                                        }
                                        toggleRemoveButtons={
                                            this.handleToggleRemoveButtons
                                        }
                                    />
                                    {this.state.isRemoveButtonsVisible && (
                                        <ExerciseButtonDelete>
                                            <Button
                                                icon="remove"
                                                danger={true}
                                                onClick={() =>
                                                    this.props.deleteExercise(
                                                        exercise.id
                                                    )
                                                }
                                                disabled={
                                                    this.props.entitiesStatus[
                                                        exercise.id
                                                    ] ===
                                                    statusConstants.STATUS_DELETING
                                                }
                                                title="Delete Exercise"
                                            />
                                        </ExerciseButtonDelete>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <NoData text="No exercises created." />
                        )}
                    </ExerciseTransition>
                </Exercises>
                <ExercisesButtonCreate>
                    <Button
                        data-e2e="exercises-button-create"
                        onClick={this.handleCreate}
                    >
                        Add Exercise
                    </Button>
                </ExercisesButtonCreate>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    exercises:
        props.entity === 'routine'
            ? exercisesRoutineSelector(props.id)(state)
            : props.entity === 'workout'
                ? exercisesWorkoutSelector(props.id)(state)
                : [],
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus
})

const mapDispatchToProps = {
    postExercise,
    putExercise,
    deleteExercise
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExercisesContainer)
