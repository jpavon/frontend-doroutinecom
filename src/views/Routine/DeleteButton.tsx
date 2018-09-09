import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { deleteRoutineRequest } from 'data/routines/actions'
import { Status } from 'data/types'
import Button from 'components/Button'

interface OwnProps {
    routineId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class DeleteButton extends React.Component<Props> {
    private handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this routine?')) {
            this.props.deleteRoutineRequest(this.props.routineId)
        }
    }

    public render() {
        return (
            <Button
                onClick={this.handleDelete}
                danger={true}
                disabled={this.props.isDeleting}
                data-e2e="routine-button-delete"
            >
                Delete Routine
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isDeleting:
        state.routines.entitiesStatus[props.routineId] ===
        Status.STATUS_DELETING
})

const mapDispatchToProps = {
    deleteRoutineRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)
