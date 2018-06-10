import * as React from 'react'
import Loading from 'components/Loading'

import './style.scss'

interface IFlashMessageProps {
    visible: boolean
}

interface IFlashMessageState {
    visible: boolean
    delay: number
}

class FlashMessage extends React.Component<
    IFlashMessageProps,
    IFlashMessageState
> {
    public timer: number | null

    constructor(props: IFlashMessageProps) {
        super(props)

        this.state = {
            visible: props.visible,
            delay: 1000
        }
    }

    public componentWillReceiveProps(nextProps: IFlashMessageProps) {
        if (nextProps.visible) {
            this.setTimer()
            this.setState({ visible: true })
        }
    }

    public componentDidMount() {
        this.setTimer()
    }

    public componentWillUnmount() {
        if (this.timer) {
            window.clearTimeout(this.timer)
        }
    }

    private setTimer() {
        if (this.timer) {
            clearTimeout(this.timer)
        }

        this.timer = window.setTimeout(() => {
            this.setState({ visible: false })
            this.timer = null
        }, this.state.delay)
    }

    public render() {
        return this.state.visible ? (
            <div className="flash-message">
                <Loading />
            </div>
        ) : null
    }
}

export default FlashMessage
