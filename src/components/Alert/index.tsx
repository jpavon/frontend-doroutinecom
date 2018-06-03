import * as React from 'react'
import * as classnames from 'classnames'
import { isString } from 'lodash'
import { Spring } from 'react-spring'

import { IAlert } from 'data/ui/types'

import './style.scss'

interface IProps extends IAlert {
    size?: string
    animate?: boolean
}

class Alert extends React.Component<IProps> {

    static defaultProps = {
        animate: true
    }

    renderMessage = (): React.ReactNode => {
        const message = this.props.message

        if (React.isValidElement(message) || isString(message)) {
            return message
        } else if (message && Object.keys(message).length > 0) {
            return (
                Object.keys(message).map((messageKey, i) => (
                    <React.Fragment key={i}>{message[messageKey]} <br /></React.Fragment>
                ))
            )
        }

        return null
    }

    render() {
        const { type, size } = this.props

        const className = classnames(
            'alert',
            type === 'success' && 'alert--success',
            type === 'error' && 'alert--error',
            type === 'info' && 'alert--info',
            size === 'small' && 'alert--small'
        )

        return (this.props.animate ? (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {(styles: object) => (
                    <div className={className} style={styles}>
                        {this.renderMessage()}
                    </div>
                )}
            </Spring>
        ) : (
            <div className={className}>
                {this.renderMessage()}
            </div>
        ))
    }
}

export default Alert
