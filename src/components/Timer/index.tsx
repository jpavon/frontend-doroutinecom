import * as React from 'react'
import * as moment from 'moment'

import { Timer as StyledTimer } from './style'

interface Props {
    start: string
}

interface State {
    hours: string
    minutes: string
    seconds: string
}

class Timer extends React.Component<Props, State> {
    public start: Date

    public timer: number

    public readonly state = {
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    constructor(props: Props) {
        super(props)

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
            <StyledTimer>
                {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </StyledTimer>
        )
    }
}

export default Timer
