import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutSelector } from 'data/workouts/selectors'

import WorkoutContainerForm from 'containers/WorkoutContainer/Form'
import ExercisesContainer from 'containers/ExercisesContainer'
import Button from 'components/Button'

import './style.css'

class WorkoutContainer extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        workout: PropTypes.object.isRequired,

        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    componentDidMount() {
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
                        entity={this.props.workout}
                        update={this.props.updateWorkout}
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
    createWorkout,
    updateWorkout,
    removeWorkout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer))
