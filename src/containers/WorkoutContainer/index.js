import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Button from 'components/Button'
import { fetchWorkouts, createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'
import WorkoutContainerForm from 'containers/WorkoutContainer/Form'
import { fetchExercises } from 'data/exercises/actions'
import { fetchSets } from 'data/sets/actions'
import ExercisesContainer from 'containers/ExercisesContainer'

import './style.css'

class WorkoutContainer extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        workout: PropTypes.object.isRequired,

        fetchWorkouts: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,

        fetchExercises: PropTypes.func.isRequired,

        fetchSets: PropTypes.func.isRequired,
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
        return (
            <div className="col">
                <Button to="/">&lt; Go back</Button>

                {Object.keys(this.props.workout).length !== 0 &&
                    <WorkoutContainerForm
                        workout={this.props.workout}
                        updateWorkout={this.props.updateWorkout}
                    />
                }

                <ExercisesContainer workoutId={this.props.id} />

                <Button onClick={this.handleRemove}>Remove workout</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workout: workoutSelector(props.id)(state),
})

const mapDispatchToProps = {
    fetchWorkouts,
    createWorkout,
    updateWorkout,
    removeWorkout,

    fetchExercises,

    fetchSets,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer))
