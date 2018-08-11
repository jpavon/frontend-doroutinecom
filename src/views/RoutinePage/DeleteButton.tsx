import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { deleteRoutine } from 'data/routines/actions'
import { statusConstants } from 'data/constants'
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
            this.props.deleteRoutine(this.props.routineId)
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
        statusConstants.STATUS_DELETING
})

const mapDispatchToProps = {
    deleteRoutine
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)
