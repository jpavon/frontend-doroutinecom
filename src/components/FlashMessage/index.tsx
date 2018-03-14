import * as React from 'react'
import Loading from 'components/Loading'

import './style.css'

interface IFlashMessageProps {
    visible: boolean
}

interface IFlashMessageState {
    visible: boolean
    delay: number
}

class FlashMessage extends React.Component<IFlashMessageProps, IFlashMessageState> {

    timer: NodeJS.Timer | null

    constructor(props: IFlashMessageProps) {
        super(props)

        this.state = {
            visible: props.visible,
            delay: 1000
        }
    }

    componentWillReceiveProps(nextProps: IFlashMessageProps) {
        if (nextProps.visible) {
            this.setTimer()
            this.setState({visible: true})
        }
    }

    componentDidMount() {
        this.setTimer()
    }

    setTimer() {
        if (this.timer) { clearTimeout(this.timer) }

        this.timer = setTimeout(() => {
            this.setState({visible: false})
            this.timer = null
        }, this.state.delay)
    }

    componentWillUnmount() {
        if (this.timer) { clearTimeout(this.timer) }
    }

    render() {
        return this.state.visible ? (
            <div className="flash-message">
                <Loading />
            </div>
        ) : null
    }
}

export default FlashMessage
