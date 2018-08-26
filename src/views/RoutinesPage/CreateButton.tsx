import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { postRoutineRequest } from 'data/routines/actions'
import { Status } from 'data/types'
import Button from 'components/Button'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class CreateButton extends React.Component<Props> {
    private handleCreate = () => {
        this.props.postRoutineRequest()
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
    isLoading: state.routines.status === Status.STATUS_LOADING
})

const mapDispatchToProps = {
    postRoutineRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateButton)
