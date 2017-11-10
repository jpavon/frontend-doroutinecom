import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import classNames from 'classnames'

import Button from 'components/Button'

import './style.css'

const moment = extendMoment(Moment)

class Calendar extends Component {

    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {
            year: moment().year(),
            month: moment().month() + 1,
        }
    }

    componentDidMount() {
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        moment.updateLocale('en', {
            week : {
                dow : 1
            }
        })

        const now = moment().year(this.state.year).month(this.state.month)
        const startOfMonth = now.clone().startOf('month')
        const endOfMonth = now.clone().endOf('month')

        const monthRange = now.clone().range(startOfMonth, endOfMonth)

        const days = Array.from(monthRange.by('day'));
        const formatedDays = days.map((m) => ({
            weekDay: m.weekday(),
            displayDay: m.format('D'),
        }))

        console.log(this.state, now)

        return (
            <div className="row">
                <div className="col">
                    <select name="year" value={this.state.year} onChange={this.handleChange}>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                    <select name="month" value={this.state.month} onChange={this.handleChange}>
                        {moment.months().map((month, i) => (
                            <option key={i} value={i < 9 ? `0${i + 1}` : i + 1}>{month}</option>
                        ))}
                    </select>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">M</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">T</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">W</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">T</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">F</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">S</div>
                </div>
                <div className="col col--1of7">
                    <div className="calendar-week-names">S</div>
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
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
