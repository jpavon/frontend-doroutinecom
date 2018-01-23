import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutsSelector } from 'data/workouts/selectors'
import { STATUS_DELETING } from 'data/utils'
import scrollTo from 'utils/scrollTo'

import ExercisesContainer from 'containers/ExercisesContainer'
import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'

class WorkoutsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        weekId: PropTypes.number.isRequired,

        workouts: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createWorkout({
            routineId: this.props.routineId,
            weekId: this.props.weekId
        }).then(() => {
            scrollTo('workout-inner', { tolerance: 30})
        })
    }

    render() {
        return (
            <Workouts
                create={this.handleCreate}
            >
                {this.props.workouts.length > 0 ?
                    this.props.workouts.map((workout, i) => (
                        <Workout
                            key={workout.id}
                            index={i}
                            workout={workout}
                            update={this.props.updateWorkout}
                            remove={this.props.removeWorkout}
                            isDeleting={this.props.entitiesStatus[workout.id] === STATUS_DELETING}
                        >
                            <ExercisesContainer
                                workoutId={workout.id}
                                routineId={this.props.routineId}
                            />
                        </Workout>
                    )) :
                    <NoData
                        buttonText="Create workout"
                        text="No workout created"
                        create={this.handleCreate}
                    />
                }
            </Workouts>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workouts: workoutsSelector(props.routineId, props.weekId)(state),
    entitiesStatus: state.workouts.entitiesStatus
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
