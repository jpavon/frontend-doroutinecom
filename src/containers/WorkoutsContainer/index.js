import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutsSelector } from 'data/workouts/selectors'

import ExercisesContainer from 'containers/ExercisesContainer'
import Workouts from 'components/Workouts/Workouts'
import Workout from 'components/Workouts/Workout'
import NoData from 'components/NoData'

class WorkoutsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        blockId: PropTypes.number.isRequired,

        workouts: PropTypes.array.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createWorkout({
            routineId: this.props.routineId,
            blockId: this.props.blockId
        })
    }

    render() {
        return (
            <Workouts handleCreate={this.handleCreate}>
                {this.props.workouts.length > 0 ?
                    this.props.workouts.map((workout, i) => (
                        <Workout
                            key={workout.id}
                            index={i}
                            workout={workout}
                            updateWorkout={this.props.updateWorkout}
                            removeWorkout={this.props.removeWorkout}
                        >
                            <ExercisesContainer
                                workoutId={workout.id}
                                routineId={this.props.routineId}
                            />
                        </Workout>
                    )) :
                    <NoData
                        buttonText="Create workout"
                        text="No workout created."
                        create={this.handleCreate}
                    />
                }
            </Workouts>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workouts: workoutsSelector(props.routineId, props.blockId)(state),
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
