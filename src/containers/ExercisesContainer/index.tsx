import * as React from 'react'
import { connect } from 'react-redux'

import { ILift } from 'data/lifts/types'
import { IRootState, IEntitiesStatus } from 'data/types'
import { IExercise } from 'data/exercises/types'

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

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

interface IOwnProps {
    routineId?: number
    workoutId?: number
}

interface IStateProps {
    exercises: IExercise[]
    lifts: ILift[]
    entitiesStatus: IEntitiesStatus
}

interface IDispatchProps {
    postExercise: typeof postExercise
    putExercise: typeof putExercise
    deleteExercise: typeof deleteExercise
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

interface IState {
    isRemoveButtonsVisible: boolean
}

class ExercisesContainer extends React.Component<IProps, IState> {
    private isRoutine: boolean

    private isWorkout: boolean

    public readonly state = {
        isRemoveButtonsVisible: !!this.props.routineId ? true : false
    }

    constructor(props: IProps) {
        super(props)

        this.isRoutine = !!props.routineId
        this.isWorkout = !!props.workoutId
    }

    private handleToggleRemoveButtons = () => {
        this.setState((prevState) => ({
            isRemoveButtonsVisible: !prevState.isRemoveButtonsVisible
        }))
    }

    private handleCreate = () => {
        const data = {}

        if (this.isRoutine) {
            /* tslint:disable:no-string-literal */
            data['routineId'] = this.props.routineId
        }

        if (this.isWorkout) {
            /* tslint:disable:no-string-literal */
            data['workoutId'] = this.props.workoutId
        }

        this.props.postExercise(data)
    }

    public render() {
        return (
            <>
                <NavBar title="Exercises" />
                <Exercises
                    create={this.handleCreate}
                    exercises={
                        this.props.exercises.length > 0 ? (
                            this.props.exercises.map((exercise, i) => (
                                <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    lifts={this.props.lifts}
                                    update={this.props.putExercise}
                                    remove={this.props.deleteExercise}
                                    isDeleting={
                                        this.props.entitiesStatus[
                                            exercise.id
                                        ] === statusConstants.STATUS_DELETING
                                    }
                                    isRemoveButtonsVisible={
                                        this.state.isRemoveButtonsVisible
                                    }
                                >
                                    <SetsContainer
                                        exerciseId={exercise.id}
                                        liftId={exercise.liftId}
                                        isWorkout={this.isWorkout}
                                        isRemoveButtonsVisible={
                                            this.state.isRemoveButtonsVisible
                                        }
                                        toggleRemoveButtons={
                                            this.handleToggleRemoveButtons
                                        }
                                    />
                                </Exercise>
                            ))
                        ) : (
                            <NoData text="No exercises created." />
                        )
                    }
                />
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    exercises: props.routineId
        ? exercisesRoutineSelector(props.routineId)(state)
        : props.workoutId
            ? exercisesWorkoutSelector(props.workoutId)(state)
            : [],
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus
})

const mapDispatchToProps: IDispatchProps = {
    postExercise,
    putExercise,
    deleteExercise
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExercisesContainer)
