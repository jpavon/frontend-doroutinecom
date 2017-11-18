import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createWorkout, updateWorkout, removeWorkout } from 'data/workouts/actions'
import { workoutsSelector } from 'data/workouts/selectors'

import Button from 'components/Button'

import { Field } from 'formik'
import withForm from 'components/Form'

const FormComponent = ({errors}) => (
    <form>
        <label htmlFor="name">Workout name:</label>
        <Field
            id="name"
            name="name"
        />
        {errors.name && <div>{errors.name}</div>}
    </form>
)
const Form = withForm(FormComponent)

class WorkoutsContainer extends Component {

    static propTypes = {
        blockId: PropTypes.number.isRequired,
        createWorkout: PropTypes.func.isRequired,
        updateWorkout: PropTypes.func.isRequired,
        removeWorkout: PropTypes.func.isRequired,
        workouts: PropTypes.array.isRequired,
    }

    handleCreateWorkout = () => {
        this.props.createWorkout({blockId: this.props.blockId})
    }

    render() {
        return (
            <div>
                <div className="block-row">
                    {this.props.workouts.map((workout, i) => (
                        <div key={i} className="block-column">
                            <div className="block-workout">
                                <div className="block-workout-name">
                                    {workout.name}

                                    <Form
                                        entity={workout}
                                        update={this.props.updateWorkout}
                                    />
                                </div>

                                <div className="block-workout-lifts">
                                    <div className="block-workout-lift">
                                        <div className="block-workout-lift-name">Squat</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                    </div>
                                    <div className="block-workout-lift">
                                        <div className="block-workout-lift-name">Rows</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                        <div className="block-workout-lift-set">200 x5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <Button onClick={this.handleCreateWorkout}>Create a new workout</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    workouts: workoutsSelector(state)
})

const mapDispatchToProps = {
    createWorkout,
    updateWorkout,
    removeWorkout
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
