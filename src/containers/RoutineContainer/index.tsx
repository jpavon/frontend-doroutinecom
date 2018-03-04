import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'
import { IWorkoutData } from 'data/workouts/types'

import history from 'utils/history'
import { now } from 'utils/date'
import { updateRoutine, removeRoutine } from 'data/routines/actions'
import { postWorkout } from 'data/workouts/actions'
import { routineSelector } from 'data/routines/selectors'
import { STATUS_LOADED, STATUS_DELETING } from 'data/constants'
import { fetchWorkoutsData } from 'data/globals'

import ExercisesContainer from 'containers/ExercisesContainer'

import Routine from 'components/Routine'
import TopNav from 'components/TopNav'

interface IOwnProps {
    routineId: number
}

interface IStateProps {
    routine: IFormatedRoutine
    isStatusLoaded: boolean
    isDeleting: boolean
}

interface IDispatchProps {
    updateRoutine: () => void
    removeRoutine: (id: number) => void
    postWorkout: (data: IWorkoutData) => void
    fetchWorkoutsData: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RoutineContainer extends React.Component<IProps> {

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.routine) {
            history.replace('/routines')
        }
    }

    handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this routine?')) {
            this.props.removeRoutine(this.props.routine.id)
                // .then(() => {
                //     history.push('/routines')
                // })
        }
    }

    handleCreateWorkout = () => {
        this.props.postWorkout({
            routineId: this.props.routine.id,
            startedAt: now()
        })
        // .then((resp) => {
        //     this.props.fetchWorkoutsData()
        //         .then(() => {
        //             history.push(`/workouts/${resp.payload.id}`)
        //         })
        // })
    }

    render() {
        return this.props.routine ? (
            <>
                {this.props.routine.name &&
                    <Helmet><title>{this.props.routine.name}</title></Helmet>
                }
                <TopNav
                    title="Routine"
                    left={{
                        to: '/routines'
                    }}
                    rightLabel="Start Workout"
                    right={{
                        onClick: this.handleCreateWorkout,
                        className: 'routine-button-create-workout'
                    }}
                />
                <Routine
                    routine={this.props.routine}
                    update={this.props.updateRoutine}
                >
                    <ExercisesContainer
                        routineId={this.props.routine.id}
                    />
                </Routine>
                {!this.props.routine.program &&
                    <TopNav
                        rightLabel="Delete Routine"
                        right={{
                            onClick: this.handleRemove,
                            danger: true,
                            disabled: this.props.isDeleting,
                            className: 'routine-button-remove'
                        }}
                    />
                }
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    routine: routineSelector(props.routineId)(state),
    isStatusLoaded: state.routines.fetchStatus === STATUS_LOADED,
    isDeleting: state.routines.entitiesStatus[props.routineId] === STATUS_DELETING
})

const mapDispatchToProps: IDispatchProps = {
    updateRoutine,
    removeRoutine,
    postWorkout,
    fetchWorkoutsData
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineContainer)
