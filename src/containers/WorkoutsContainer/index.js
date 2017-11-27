import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutsSelector } from 'data/workouts/selectors'

import ExercisesContainer from 'containers/ExercisesContainer'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import Button from 'components/Button'

const workoutForm = () => (
    <Input
        name="name"
        placeholder="Name..."
        alignCenter
    />
)
const WorkoutForm = withForm(workoutForm)

class WorkoutsContainer extends Component {

    static propTypes = {
        ui: PropTypes.object.isRequired,
        blockId: PropTypes.number.isRequired,

        workouts: PropTypes.array.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <div className="block-row">
                    {this.props.workouts.map((workout, i) => (
                        <div key={workout.id} className="block-column">
                            <div className="block-workout">
                                <div className="block-workout-name">
                                    <WorkoutForm
                                        data={workout}
                                        update={this.props.updateWorkout}
                                    />
                                </div>

                                <ExercisesContainer workoutId={workout.id} />
                            </div>
                            <Button danger onClick={() => this.props.removeWorkout(workout.id)}>Remove workout</Button>
                        </div>
                    ))}
                </div>
                <br />
                <Button onClick={() => this.props.createWorkout({blockId: this.props.blockId})}>Create a new workout</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workouts: workoutsSelector(props.blockId)(state),
    ui: state.ui
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
