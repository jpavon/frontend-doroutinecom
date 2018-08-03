import * as React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { removeAlert } from 'data/ui/actions'
import Alert from 'components/Alert'
import { Container } from './style'

interface OwnProps {
    header: React.ReactNode
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Layout extends React.Component<Props> {
    constructor(props: Props) {
        super(props)

        if (this.props.alert) {
            this.props.removeAlert()
        }
    }

    public componentWillReceiveProps(nextProps: Props) {
        if (nextProps.alert && nextProps.alert === this.props.alert) {
            this.props.removeAlert()
        }
    }

    public render() {
        return (
            <>
                <Helmet>{this.props.header}</Helmet>
                <Container>
                    {this.props.alert && (
                        <Alert
                            type={this.props.alert.type}
                            message={this.props.alert.message}
                        />
                    )}
                    {this.props.children}
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    alert: state.ui.alert
})

const mapDispatchToProps = {
    removeAlert
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)
