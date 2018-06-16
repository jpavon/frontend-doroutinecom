import * as React from 'react'
import * as classnames from 'classnames'
import { Spring } from 'react-spring'
import { isString } from 'lodash'

import { IAlert } from 'data/ui/types'

import './style.scss'

interface IProps extends IAlert {
    size?: string
    animate?: boolean
}

class Alert extends React.Component<IProps> {
    public static defaultProps = {
        animate: true
    }

    private renderMessage = (): React.ReactNode => {
        const message = this.props.message

        if ((message && React.isValidElement(message)) || isString(message)) {
            return message
        }

        if (message && Object.values(message).length > 0) {
            return Object.values(message).map((message, i) => (
                <React.Fragment key={i}>
                    {message} <br />
                </React.Fragment>
            ))
        }

        return null
    }

    public render() {
        const className = classnames(
            'alert',
            this.props.type === 'success' && 'alert--success',
            this.props.type === 'error' && 'alert--error',
            this.props.type === 'info' && 'alert--info',
            this.props.size === 'small' && 'alert--small'
        )

        return this.props.animate ? (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {(styles: object) => (
                    <div className={className} style={styles}>
                        {this.renderMessage()}
                    </div>
                )}
            </Spring>
        ) : (
            <div className={className}>{this.renderMessage()}</div>
        )
    }
}

export default Alert
