import * as React from 'react'

import moment from 'utils/moment'

import './style.scss'

interface ITimerProps {
    start: string
}

interface ITimerState {
    hours: string
    minutes: string
    seconds: string
}

class Timer extends React.Component<ITimerProps, ITimerState> {
    public start: Date
    public timer: number

    constructor(props: ITimerProps) {
        super(props)

        this.state = {
            hours: '0',
            minutes: '0',
            seconds: '0'
        }

        this.start = moment(props.start).toDate()
    }

    public componentDidMount() {
        this.tick()
        this.timer = window.setInterval(this.tick, 1000)
    }

    public componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    private format = (n: number): string => {
        return n > 9 ? n + '' : '0' + n
    }

    private tick = () => {
        let delta = Math.abs(Number(new Date()) - Number(this.start)) / 1000

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600)
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

    public render() {
        return (
            <span className="timer">
                {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </span>
        )
    }
}

export default Timer
