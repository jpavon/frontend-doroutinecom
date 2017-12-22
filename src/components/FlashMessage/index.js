import React, { Component } from 'react'
import Loading from 'components/Loading'

import './style.css'

class FlashMessage extends Component {

    state = {
        visible: this.props.visible,
        delay: 1000
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setTimer()
            this.setState({visible: true})
        }
    }

    componentDidMount() {
        this.setTimer()
    }

    setTimer() {
        this.timer && clearTimeout(this.timer)

        this.timer = setTimeout(() => {
            this.setState({visible: false})
            this.timer = null
        }, this.state.delay)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return this.state.visible
            ? (<div className="flash-message"><Loading /></div>)
            : null
    }
}

export default FlashMessage
