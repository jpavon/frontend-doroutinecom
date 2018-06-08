import * as React from 'react'

import { IRootState } from 'data/types'
import { IAlert } from 'data/ui/types'

import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { removeAlert } from 'data/ui/actions'

import Alert from 'components/Alert'

interface IOwnProps {
    header: React.ReactNode
}

interface IStateProps {
    alert: IAlert | null
}

interface IDispatchProps {
    removeAlert: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class Layout extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)

        if (this.props.alert) {
            this.props.removeAlert()
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.alert && nextProps.alert === this.props.alert) {
            this.props.removeAlert()
        }
    }

    render() {
        return (
            <>
                <Helmet>{this.props.header}</Helmet>
                <main className="container">
                    {this.props.alert && (
                        <Alert
                            type={this.props.alert.type}
                            message={this.props.alert.message}
                        />
                    )}
                    {this.props.children}
                </main>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    alert: state.ui.alert
})

const mapDispatchToProps: IDispatchProps = {
    removeAlert
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)
