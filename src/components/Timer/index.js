import React, { Component } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

class Timer extends Component {

    static propTypes = {
        start: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        this.start = moment(props.start).toDate()
    }

    componentDidMount() {
        this.tick()
        this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    format = (n) => {
        return n > 9 ? "" + n: "0" + n
    }

    tick = () => {
        let delta = Math.abs(new Date() - this.start) / 1000

        // calculate (and subtract) whole days
        const days = Math.floor(delta / 86400)
        delta -= days * 86400

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600) % 24
        delta -= hours * 3600

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60
        delta -= minutes * 60

        // what's left is seconds
        const seconds = Math.floor(delta % 60)

        this.setState({
            hours: this.format(hours),
            minutes: this.format(minutes),
            seconds: this.format(seconds)
        })
    }

    render() {
        return (<span className="timer">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>)
    }
}

export default Timer
