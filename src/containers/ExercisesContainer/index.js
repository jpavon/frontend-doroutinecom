import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { createSet } from 'data/sets/actions'
import { liftsSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/SetsContainer'
import Button from 'components/Button'
import Form from 'containers/ExercisesContainer/Form'

import './style.css'

class ExercisesContainer extends Component {

    static propTypes = {
        workoutId: PropTypes.number.isRequired,
        exercises: PropTypes.array.isRequired,
        lifts: PropTypes.array.isRequired,

        createExercise: PropTypes.func.isRequired,
        updateExercise: PropTypes.func.isRequired,
        createSet: PropTypes.func.isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.exercises.length > 0 && this.props.exercises.map((exercise, i) => (
                    <div style={{padding: '20px', 'backgroundColor': '#eee'}} key={i}>
                        <Form
                            updateExercise={this.props.updateExercise}
                            exercise={exercise}
                            lifts={this.props.lifts}
                        />
                        <SetsContainer exerciseId={exercise.id} />
                        <Button onClick={() => this.props.createSet(exercise.id)}>New set</Button>
                    </div>
                ))}
                <Button onClick={() => this.props.createExercise(this.props.workoutId)}>New exercise</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    exercises: exercisesSelector(props.workoutId)(state),
    lifts: liftsSelector(state)
})

const mapDispatchToProps = {
    createExercise,
    updateExercise,
    createSet
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)
