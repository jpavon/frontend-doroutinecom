import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { postLiftRequest } from 'data/lifts/actions'
import { Status } from 'data/types'
import Button from 'components/Button'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class CreateButton extends React.Component<Props> {
    public render() {
        return (
            <Button
                onClick={() => this.props.postLiftRequest()}
                disabled={this.props.isLoading}
                data-e2e="lift-button-create"
            >
                Create
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isLoading: state.lifts.status === Status.STATUS_LOADING
})

const mapDispatchToProps = {
    postLiftRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateButton)
