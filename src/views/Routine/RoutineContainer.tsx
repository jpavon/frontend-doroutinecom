import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import history from 'utils/history'
import { now } from 'utils/date'
import { putRoutine, deleteRoutine } from 'data/routines/actions'
import { postWorkoutFrom } from 'data/workouts/actions'
import { routineSelector } from 'data/routines/selectors'
import { statusConstants } from 'data/constants'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import ExercisesContainer from 'views/shared/Exercises/ExercisesContainer'
import { Routine } from 'views/Routine/style'

interface OwnProps {
    routineId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class RoutineContainer extends React.Component<Props> {
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
                <NavBar
                    title="Edit routine"
                    leftButton={
                        <Button to="/routines" icon="back">
                            Back
                        </Button>
                    }
                    rightButton={
                        <Button
                            onClick={this.handleCreateWorkout}
                            data-e2e="routine-button-create-workout"
                        >
                            Start Workout
                        </Button>
                    }
                />
                <Routine data-e2e="routine">
                    <AutoSaveForm
                        initialValues={this.props.routine}
                        update={this.props.putRoutine}
                        render={({ values }) => (
                            <Field label="Name" id={`name${values.id}`}>
                                <Input
                                    id={`name${values.id}`}
                                    name="name"
                                    placeholder="Type your routine name"
                                    data-e2e="routine-input-name"
                                />
                            </Field>
                        )}
                    />
                    <ExercisesContainer
                        id={this.props.routine.id}
                        entity="routine"
                    />
                    <AutoSaveForm
                        initialValues={this.props.routine}
                        update={this.props.putRoutine}
                        render={({ values }) => (
                            <Field
                                label="Additional Notes"
                                id={`notes${values.id}`}
                            >
                                <Textarea
                                    id={`notes${values.id}`}
                                    name="notes"
                                    placeholder="Type any extra exercises or annotations"
                                    data-e2e="routine-input-notes"
                                />
                            </Field>
                        )}
                    />
                </Routine>
                {!this.props.routine.program && (
                    <NavBar
                        rightButton={
                            <Button
                                onClick={this.handleRemove}
                                danger={true}
                                disabled={this.props.isDeleting}
                                data-e2e="routine-button-delete"
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

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    routine: routineSelector(state, props.routineId),
    isStatusLoaded: state.routines.status === statusConstants.STATUS_LOADED,
    isDeleting:
        state.routines.entitiesStatus[props.routineId] ===
        statusConstants.STATUS_DELETING
})

const mapDispatchToProps = {
    putRoutine,
    deleteRoutine,
    postWorkoutFrom
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutineContainer)
