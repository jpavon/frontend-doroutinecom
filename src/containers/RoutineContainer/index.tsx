import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import { IRoutine } from 'data/routines/types'

import history from 'utils/history'
import { now } from 'utils/date'
import { putRoutine, deleteRoutine } from 'data/routines/actions'
import { postWorkoutFrom } from 'data/workouts/actions'
import { routineSelector } from 'data/routines/selectors'
import { statusConstants } from 'data/constants'

import ExercisesContainer from 'containers/ExercisesContainer'

import Routine from 'components/Routine'
import TopNav from 'components/TopNav'
import Button from 'components/Button'

interface IOwnProps {
    routineId: number
}

interface IStateProps {
    routine: IRoutine | null
    isStatusLoaded: boolean
    isDeleting: boolean
}

interface IDispatchProps {
    putRoutine: typeof putRoutine
    deleteRoutine: typeof deleteRoutine
    postWorkoutFrom: typeof postWorkoutFrom
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RoutineContainer extends React.Component<IProps> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.routine) {
            history.replace('/routines')
        }
    }

    private handleRemove = () => {
        if (!this.props.routine) {
            return
        }

        if (window.confirm('Are you sure you want to delete this routine?')) {
            this.props.deleteRoutine(this.props.routine.id)
        }
    }

    private handleCreateWorkout = () => {
        if (!this.props.routine) {
            return
        }

        this.props.postWorkoutFrom({
            routineId: this.props.routine.id,
            startedAt: now()
        })
    }

    public render() {
        return this.props.routine ? (
            <>
                {this.props.routine.name && (
                    <Helmet>
                        <title>{this.props.routine.name}</title>
                    </Helmet>
                )}
                <TopNav
                    title="Routine"
                    leftButton={
                        <Button to="/routines" backIcon={true}>
                            Back
                        </Button>
                    }
                    rightButton={
                        <Button
                            onClick={this.handleCreateWorkout}
                            className="routine-button-create-workout"
                        >
                            Start Workout
                        </Button>
                    }
                />
                <Routine
                    routine={this.props.routine}
                    update={this.props.putRoutine}
                >
                    <ExercisesContainer routineId={this.props.routine.id} />
                </Routine>
                {!this.props.routine.program && (
                    <TopNav
                        rightButton={
                            <Button
                                onClick={this.handleRemove}
                                danger={true}
                                disabled={this.props.isDeleting}
                                className="routine-button-delete"
                            >
                                Delete Routine
                            </Button>
                        }
                    />
                )}
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    routine: routineSelector(state, props.routineId),
    isStatusLoaded: state.routines.status === statusConstants.STATUS_LOADED,
    isDeleting:
        state.routines.entitiesStatus[props.routineId] ===
        statusConstants.STATUS_DELETING
})

const mapDispatchToProps: IDispatchProps = {
    putRoutine,
    deleteRoutine,
    postWorkoutFrom
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutineContainer)
