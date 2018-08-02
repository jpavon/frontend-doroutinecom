import * as React from 'react'

import { Spinner } from './style'

class Loading extends React.Component {
    public timer: number

    public readonly state = {
        render: false
    }

    public componentDidMount() {
        this.timer = window.setTimeout(() => {
            this.setState({ render: true })
        }, 300)
    }

    public componentWillUnmount() {
        window.clearTimeout(this.timer)
    }

    public render() {
        return this.state.render ? <Spinner /> : null
    }
}

export default Loading
