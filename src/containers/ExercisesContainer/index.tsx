import * as React from 'react'
import { connect } from 'react-redux'

import { createExercise, updateExercise, removeExercise } from 'data/exercises/actions'
import { exercisesRoutineSelector, exercisesWorkoutSelector } from 'data/exercises/selectors'
import { liftsSelector } from 'data/lifts/selectors'
import { STATUS_DELETING } from 'data/utils'
// import { ExercisesType, ExerciseRoutineAndWorkoutIdType } from 'data/exercises/types'
// import { LiftsType } from 'data/lifts/types'
// import { StatusType } from 'data/types'
import { FormatedExercise } from 'data/exercises/types'
import { FormatedLift } from 'data/lifts/types'
import { RootState, IEntitiesStatus } from 'data/types'

import SetsContainer from 'containers/SetsContainer'

import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Exercises from 'components/Exercises/Exercises'
import Exercise from 'components/Exercises/Exercise'

interface OwnProps {
    routineId?: number
    workoutId?: number
}

interface StateProps {
    exercises: FormatedExercise[]
    lifts: FormatedLift[]
    entitiesStatus: IEntitiesStatus
}

interface DispatchProps {
    createExercise: (data: {routineId?: number, workoutId?: number }) => void
    updateExercise: (id: number, data: {}) => void
    removeExercise: () => void
}

interface Props extends OwnProps, StateProps, DispatchProps {}

interface State {
    isRemoveButtonsVisible: boolean
}

class ExercisesContainer extends React.Component<Props, State> {

    isRoutine: boolean
    isWorkout: boolean

    constructor(props: Props) {
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

        this.props.createExercise(data)
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
                                update={this.props.updateExercise}
                                remove={this.props.removeExercise}
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

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
    exercises: props.routineId ?
        exercisesRoutineSelector(props.routineId)(state) :
        exercisesWorkoutSelector(props.workoutId)(state),
    lifts: liftsSelector(state),
    entitiesStatus: state.exercises.entitiesStatus,
})

const mapDispatchToProps: DispatchProps = {
    createExercise,
    updateExercise,
    removeExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
