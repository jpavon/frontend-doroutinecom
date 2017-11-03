import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { fetchWorkouts, createWorkout } from 'data/workouts/actions'
import { monthlyWorkoutsSelector } from 'data/workouts/selectors'
import Button from 'components/Button'

import './style.css'

class WorkoutsContainer extends Component {

    static propTypes = {
        fetchWorkouts: PropTypes.func.isRequired,
        createWorkout: PropTypes.func.isRequired,
        monthlyWorkouts: PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        this.props.fetchWorkouts()
    }

    handleClick = (e) => {
        this.props.createWorkout()
            .then((data) => {
                console.log(data.payload.id)
                this.setState({
                    redirect: `/workouts/${data.payload.id}`
                })
            })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect push to={this.state.redirect} />
        }

        return ([
            <div className="col" key={3}>
                <Button onClick={this.handleClick}>Create a new workout</Button>
            </div>,
            <div key={1} className="col col--6">
                <h2>Finished Workouts</h2>
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
            </div>,
            <div key={2} className="col col--6">
                <h2>Upcoming Workouts</h2>
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
        ])
    }
}

const mapStateToProps = (state, props) => ({
    monthlyWorkouts: monthlyWorkoutsSelector(state)
})

const mapDispatchToProps = {
    fetchWorkouts,
    createWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)
