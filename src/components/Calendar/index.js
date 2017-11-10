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


    }

    componentDidMount() {
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
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
