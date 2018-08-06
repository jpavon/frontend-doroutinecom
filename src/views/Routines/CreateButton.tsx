import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { postRoutine } from 'data/routines/actions'
import { statusConstants } from 'data/constants'
import Button from 'components/Button'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class CreateButton extends React.Component<Props> {
    private handleCreate = () => {
        this.props.postRoutine()
    }

    public render() {
        return (
            <Button
                onClick={this.handleCreate}
                disabled={this.props.isLoading}
                data-e2e="routine-button-create"
            >
                Create
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isLoading: state.routines.status === statusConstants.STATUS_LOADING
})

const mapDispatchToProps = {
    postRoutine
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateButton)
