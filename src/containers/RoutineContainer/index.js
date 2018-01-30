import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { updateRoutine, removeRoutine } from 'data/routines/actions'
import { createWorkout } from 'data/workouts/actions'
import { routineByIdSelector } from 'data/routines/selectors'
import { STATUS_LOADED } from 'data/utils'
import { fetchWorkoutsData } from 'data/globals'

// import LiftsContainer from 'containers/LiftsContainer'
import ExercisesContainer from 'containers/ExercisesContainer'
// import GraphContainer from 'containers/GraphContainer'

import Routine from 'components/Routine'
import TopNav from 'components/TopNav'

class RoutineContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        routine: PropTypes.object,
        isStatusLoaded: PropTypes.bool.isRequired,

        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        fetchWorkoutsData: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.routine) {
            history.push('/routines')
        }
    }

    handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this routine?')) {
            this.props.removeRoutine(this.props.routine.id)
                .then(() => {
                    history.push('/')
                })
        }
    }

    handleCreateWorkout = () => {
        this.props.createWorkout({
            routineId: this.props.routine.id
        }).then((resp) => {
            this.props.fetchWorkoutsData()
                .then(() => {
                    history.push(`/workouts/${resp.payload.id}`)
                })
        })
    }

    render() {
        return this.props.routine ?
            (
                <Fragment>
                    <TopNav
                        title="Routine"
                        left={{
                            to: "/routines"
                        }}
                        rightLabel="Start Workout"
                        right={{
                            onClick: this.handleCreateWorkout
                        }}
                    />
                    <Routine
                        routine={this.props.routine}
                        update={this.props.updateRoutine}
                    >
                        <ExercisesContainer routineId={this.props.routine.id} />
                    </Routine>
                </Fragment>
            )
        : null
    }
}

const mapStateToProps = (state, props) => ({
    routine: routineByIdSelector(props.routineId)(state),
    isStatusLoaded: state.routines.fetchStatus === STATUS_LOADED,
})

const mapDispatchToProps = {
    updateRoutine,
    removeRoutine,
    createWorkout,
    fetchWorkoutsData
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineContainer)
