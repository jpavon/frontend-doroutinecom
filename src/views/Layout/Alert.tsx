import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { removeAlert } from 'data/ui/actions'
import AlertComponent from 'components/Alert'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Alert extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.alert) {
            this.props.removeAlert()
        }
    }

    public render() {
        return (
            this.props.alert && (
                <AlertComponent
                    type={this.props.alert.type}
                    message={this.props.alert.message}
                />
            )
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
)(Alert)
