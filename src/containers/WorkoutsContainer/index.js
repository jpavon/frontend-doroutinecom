import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import classNames from 'classnames'

import { createWorkout } from 'data/workouts/actions'
import { monthlyWorkoutsSelector } from 'data/workouts/selectors'
import Button from 'components/Button'

import './style.css'

const moment = extendMoment(Moment)

class WorkoutsContainer extends Component {

    static propTypes = {
        createWorkout: PropTypes.func.isRequired,
        monthlyWorkouts: PropTypes.array.isRequired,
    }

    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
    }

    handleCreateWorkout = (e) => {
        this.props.createWorkout()
            .then((data) => {
                this.props.history.push(`/workouts/${data.payload.id}`)
            })
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        moment.updateLocale('en', {
            week : {
                dow : 1
            }
        })

        const now = moment('20171201')
        const startOfMonth = now.clone().startOf('month')
        const endOfMonth = now.clone().endOf('month')

        const monthRange = now.clone().range(startOfMonth, endOfMonth)

        const days = Array.from(monthRange.by('day'));
        const formatedDays = days.map((m) => ({
            weekDay: m.weekday(),
            displayDay: m.format('D'),
        }))
        console.log(formatedDays)

        // year and month are variables
        // const year = 2015
        // const month = 7 // August (0 indexed)
        // const startDate = moment([year, month])

        // // Get the first and last day of the month
        // const firstDay = moment(startDate).startOf('month')
        // const endDay = moment(startDate).endOf('month')

        // // Create a range for the month we can iterate through
        // const monthRange = moment().range(firstDay, endDay)

        // // Get all the weeks during the current month
        // const weeks = []
        // for (let day of monthRange.by('day')) {
        //     if (!weeks.includes(day.week())) {
        //         weeks.push(day.week())
        //     }
        // }

        // // Create a range for each week
        // const calendar = []
        // for (let week of weeks) {
        //     // Create a range for that week between 1st and 7th day
        //     const firstWeekDay = moment().week(week).day(1)
        //     const lastWeekDay = moment().week(week).day(7)
        //     const weekRange = moment.range(firstWeekDay, lastWeekDay)

        //     // Add to the calendar
        //     calendar.push(weekRange)
        // }

        // console.log(calendar)

        return (
            <div className="row">
                <div className="col">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
                <div className="col col--1of7">
                    M
                </div>
                <div className="col col--1of7">
                    T
                </div>
                <div className="col col--1of7">
                    W
                </div>
                <div className="col col--1of7">
                    T
                </div>
                <div className="col col--1of7">
                    F
                </div>
                <div className="col col--1of7">
                    S
                </div>
                <div className="col col--1of7">
                    S
                </div>
                {formatedDays.map((day, i) => (
                    <div className={classNames('col col--1of7', { [`col--offset${day.weekDay}of7`]: i === 0})} key={i}>
                        <div className="calendar-day">
                            {day.displayDay}
                        </div>
                    </div>
                ))}
            </div>
        )

        return ([
            <div className="col" key={3}>
                <Button onClick={this.handleCreateWorkout}>Create a new workout</Button>
            </div>,
            <div key={1} className="col col--6">
                <h2>Finished Workouts</h2>
                {this.props.monthlyWorkouts.length > 0 && this.props.monthlyWorkouts.map((monthlyWorkout, i) => (
                    <div key={i}>
                        <h3>{monthlyWorkout.month}</h3>
                        {monthlyWorkout.data.map((workout, i) => (
                            <div key={i} className="workout">
                                <div className="workout-day">{workout.dayFormatted}</div>
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
                                <div className="workout-day">{workout.dayFormatted}</div>
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
    createWorkout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer))
