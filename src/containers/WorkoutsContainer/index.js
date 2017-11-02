import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchWorkouts } from 'data/workouts/actions'
import { monthlyWorkoutsSelector } from 'data/workouts/selectors'
import Button from 'components/Button'

import './style.css'

class WorkoutsContainer extends Component {

    static propTypes = {
        fetchWorkouts: PropTypes.func.isRequired,
        monthlyWorkouts: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkouts();
    }

    handleClick = (e) => {

    }

    render() {
        // console.log(this.props.monthlyWorkouts)
        return (
            <div className="col">
                <h2>Workouts</h2>
                {this.props.monthlyWorkouts.length > 0 && this.props.monthlyWorkouts.map((monthlyWorkout, i) => (
                    <div key={i}>
                        <h3>{monthlyWorkout.month}</h3>
                        {monthlyWorkout.data.map((workout, i) => (
                            <div key={i} className="workout">
                                <div className="workout-day">{workout.day}</div>
                                <div className="workout-name">{workout.name}</div>
                                <div className="workout-button">
                                    <Button to={`/workouts/${workout.id}`}>See workout</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    monthlyWorkouts: monthlyWorkoutsSelector(state)
})

const mapDispatchToProps = {
    fetchWorkouts
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
