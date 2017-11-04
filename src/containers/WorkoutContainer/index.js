import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Button from 'components/Button'
import { fetchWorkouts, createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import WorkoutContainerForm from 'containers/WorkoutContainer/Form'
import { fetchExercises, createExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { fetchSets, createSet } from 'data/sets/actions'

import './style.css'

class WorkoutContainer extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        workout: PropTypes.object.isRequired,
        exercises: PropTypes.array.isRequired,

        fetchWorkouts: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,

        fetchExercises: PropTypes.func.isRequired,
        createExercise: PropTypes.func.isRequired,

        fetchSets: PropTypes.func.isRequired,
        createSet: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchWorkouts();
        this.props.fetchExercises();
        this.props.fetchSets();
    }

    handleRemove = () => {
        this.props.removeWorkout(this.props.id)
            .then((data) => {
                this.props.history.push('/')
            })
    }

    render() {
        console.log(this.props.exercises)
        return (
            <div className="col">
                <Button to="/">&lt; Go back</Button>
                {Object.keys(this.props.workout).length !== 0 &&
                    <WorkoutContainerForm
                        workout={this.props.workout}
                        updateWorkout={this.props.updateWorkout}
                    />
                }

                {this.props.exercises.length > 0 && this.props.exercises.map((exercise, i) => (
                    <div style={{padding: '20px', 'backgroundColor': '#eee'}} key={i}>
                        {exercise.id}
                        <Button onClick={() => this.props.createSet(exercise.id)}>New set</Button>
                    </div>
                ))}

                <Button onClick={() => this.props.createExercise(this.props.workout.id)}>New exercise</Button>

                <Button onClick={this.handleRemove}>Remove workout</Button>
                {/*Object.keys(this.props.workout).length !== 0 &&
                    <div className="workout-single">
                        <WorkoutContainerForm workout={this.props.workout} createWorkout={this.props.createWorkout} />
                        <div className="workout-single-day">{this.props.workout.day}</div>
                        <div className="workout-single-title">{this.props.workout.name}</div>
                        {this.props.workout.exercises.length > 0 && this.props.workout.exercises.map((exercise, i) => (
                            <div key={i} className="exercise">
                                <div className="exercise-name">{exercise.lift.name}</div>
                                <div className="exercise-data-container">
                                    <div className="exercise-data">Reps: {exercise.reps}</div>
                                    <div className="exercise-data">Weight: {exercise.weight}</div>
                                    <div className="exercise-data">RM Percentage: {exercise.rmPercentage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                */}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workout: workoutSelector(props.id)(state),
    exercises: exercisesSelector(props.id)(state)
})

const mapDispatchToProps = {
    fetchWorkouts,
    createWorkout,
    updateWorkout,
    removeWorkout,

    fetchExercises,
    createExercise,

    fetchSets,
    createSet
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer))
