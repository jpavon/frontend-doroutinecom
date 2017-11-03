import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Button from 'components/Button'
import { fetchWorkouts, createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import WorkoutContainerForm from 'containers/WorkoutContainer/Form'

import './style.css'

class WorkoutContainer extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        workout: PropTypes.object.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        this.props.fetchWorkouts();
    }

    handleRedirect = () => {
        this.setState({
            redirect: '/'
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect push to={this.state.redirect} />
        }

        return (
            <div className="col">
                <Button to="/">&lt; Go back</Button>
                {Object.keys(this.props.workout).length !== 0 &&
                    <WorkoutContainerForm
                        workout={this.props.workout}
                        updateWorkout={this.props.updateWorkout}
                        deleteWorkout={this.props.removeWorkout}
                        setRedirect={this.handleRedirect}
                    />
                }

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
    workout: workoutSelector(props.id)(state)
})

const mapDispatchToProps = {
    fetchWorkouts,
    createWorkout,
    updateWorkout,
    removeWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)
