import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { RootState } from 'data/types'
import history from 'utils/history'
import { putWorkout } from 'data/workouts/actions'
import {
    workoutSelector,
    workoutDisplayNameSelector,
    workoutRoutineSelector
} from 'data/workouts/selectors'
import { statusConstants } from 'data/constants'
import AutoSaveForm from 'components/AutoSaveForm'
import Datetime from 'components/AutoSaveForm/Datetime'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'
import { WorkoutDates } from './style'

interface OwnProps {
    workoutId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Form extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.workout) {
            history.replace('/workouts')
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
                            {this.props.workout &&
                                this.props.workout.completedAt && (
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
                {this.props.children}
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
            </>
        ) : null
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workout: workoutSelector(state, props.workoutId),
    displayName: workoutDisplayNameSelector(state, props.workoutId),
    routine: workoutRoutineSelector(state, props.workoutId),
    isStatusLoaded: state.workouts.status === statusConstants.STATUS_LOADED
})

const mapDispatchToProps = {
    putWorkout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
