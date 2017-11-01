import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loadWorkouts } from 'models/workouts/actions'
// import Button from 'components/Button'
import Row from 'components/Row'
import Container from 'components/Container'
import Col from 'components/Col'

import './style.css'

class WorkoutsContainer extends Component {

    static propTypes = {
        loadWorkouts: PropTypes.func.isRequired,
        workouts: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.loadWorkouts();
    }

    handleClick = (e) => {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col number={4}>
                        <h2>Workouts</h2>
                    </Col>
                    <Col number={8}>
                        {this.props.workouts.data && this.props.workouts.data.map((workout) => (
                            <div key={workout.id}>
                                <h3>{workout.name} / {workout.day}</h3>
                                <div>
                                    <strong>Exercises</strong>
                                    <div>
                                        {workout.exercises && workout.exercises.map((exercise) => (
                                            <div key={exercise.id}>{exercise.lift.name}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    workouts: state.workouts
})

const mapDispatchToProps = {
    loadWorkouts
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer))
