import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { deleteLift } from 'data/lifts/actions'
import { Status } from 'data/types'
import Button from 'components/Button'

interface OwnProps {
    liftId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class DeleteButton extends React.Component<Props> {
    private handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this lift?')) {
            this.props.deleteLift(this.props.liftId)
        }
    }

    public render() {
        return (
            <Button
                onClick={this.handleRemove}
                danger={true}
                disabled={this.props.isDeleting}
                data-e2e="lift-button-delete"
            >
                Delete Lift
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isDeleting:
        state.lifts.entitiesStatus[props.liftId] === Status.STATUS_DELETING
})

const mapDispatchToProps = {
    deleteLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)
