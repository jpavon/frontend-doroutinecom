import * as React from 'react'
import { connect } from 'react-redux'

import { postExercise, putExercise, deleteExercise } from 'data/exercises/actions'
import { exercisesRoutineSelector, exercisesWorkoutSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { STATUS_DELETING } from 'data/constants'

import { IFormatedExercise } from 'data/exercises/types'
import { IFormatedLift } from 'data/lifts/types'
import { IRootState, IEntitiesStatus } from 'data/types'

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

interface IOwnProps {
    routineId?: number
    workoutId?: number
}

interface IStateProps {
    exercises: IFormatedExercise[]
    lifts: IFormatedLift[]
    entitiesStatus: IEntitiesStatus
}

interface IDispatchProps {
    postExercise: (data: {routineId?: number, workoutId?: number }) => void
    putExercise: (id: number, data: {}) => void
    deleteExercise: (id: number) => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

interface IState {
    isRemoveButtonsVisible: boolean
}

class ExercisesContainer extends React.Component<IProps, IState> {

    isRoutine: boolean
    isWorkout: boolean

    constructor(props: IProps) {
        super(props)

        this.isRoutine = !!props.routineId
        this.isWorkout = !!props.workoutId

        this.state = {
            isRemoveButtonsVisible: !!props.routineId ? true : false,
        }
    }

    handleToggleRemoveButtons = () => {
        this.setState((prevState) => ({
            isRemoveButtonsVisible: !prevState.isRemoveButtonsVisible
        }))
    }

    handleCreate = () => {
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

    render() {
        return (
            <>
                <TopNav
                    title="Exercises"
                />
                <Exercises
                    create={this.handleCreate}
                >
                    {this.props.exercises.length > 0 ?
                        this.props.exercises.map((exercise, i) => (
                            <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                lifts={this.props.lifts}
                                update={this.props.putExercise}
                                remove={this.props.deleteExercise}
                                isDeleting={this.props.entitiesStatus[exercise.id] === STATUS_DELETING}
                                isRemoveButtonsVisible={this.state.isRemoveButtonsVisible}
                            >
                                <SetsContainer
                                    exerciseId={exercise.id}
                                    liftId={exercise.liftId}
                                    isWorkout={this.isWorkout}
                                    isRemoveButtonsVisible={this.state.isRemoveButtonsVisible}
                                    toggleRemoveButtons={this.handleToggleRemoveButtons}
                                />
                            </Exercise>
                        )) :
                        <NoData
                            text="No exercises created."
                        />
                    }
                </Exercises>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    exercises: props.routineId ?
        exercisesRoutineSelector(props.routineId)(state) :
        exercisesWorkoutSelector(props.workoutId)(state),
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus,
})

const mapDispatchToProps: IDispatchProps = {
    postExercise,
    putExercise,
    deleteExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
