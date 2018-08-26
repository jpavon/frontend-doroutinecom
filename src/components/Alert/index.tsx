import * as React from 'react'
import { Spring } from 'react-spring'
import { isString } from 'lodash'

import { Alert as AlertProps } from 'data/ui/types'

import { AlertWrapper } from './style'

interface Props extends AlertProps {
    size?: string
    animate?: boolean
}

class Alert extends React.Component<Props> {
    public static defaultProps = {
        animate: true
    }

    private renderMessage = (): React.ReactNode => {
        const message = this.props.message

        if ((message && React.isValidElement(message)) || isString(message)) {
            return message
        }

        if (message && Object.values(message).length > 0) {
            return Object.values(message).map((m, i) => (
                <React.Fragment key={i}>
                    {m} <br />
                </React.Fragment>
            ))
        }

        return null
    }

    private renderAlert = (styles?: object): React.ReactNode => {
        return (
            <AlertWrapper
                size={this.props.size}
                type={this.props.type}
                style={styles}
                id="alert"
                data-e2e="alert"
            >
                {this.renderMessage()}
            </AlertWrapper>
        )
    }

    public render() {
        return this.props.animate ? (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {(styles: object) => this.renderAlert(styles)}
            </Spring>
        ) : (
            this.renderAlert()
        )
    }
}

export default Alert
