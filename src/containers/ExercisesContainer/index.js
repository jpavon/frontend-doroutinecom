import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createExercise, updateExercise } from 'data/exercises/actions'
import { exercisesSelector } from 'data/exercises/selectors'
import { createSet } from 'data/sets/actions'
import { liftsSelector } from 'data/lifts/selectors'

import SetsContainer from 'containers/SetsContainer'
import Form from 'containers/ExercisesContainer/Form'
import Button from 'components/Button'
import Panel from 'components/Panel'

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
                <h3>Exercises</h3>
                {this.props.exercises.length > 0 && this.props.exercises.map((exercise, i) => (
                    <Panel key={i}>
                        <Form
                            update={this.props.updateExercise}
                            entity={exercise}
                            lifts={this.props.lifts}
                        />
                        <br/>
                        <SetsContainer exerciseId={exercise.id} />
                        <br/>
                        <Button onClick={() => this.props.createSet(exercise.id)}>New set</Button>
                    </Panel>
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
