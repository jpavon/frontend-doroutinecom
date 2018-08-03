import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { deleteLift } from 'data/lifts/actions'
import { statusConstants } from 'data/constants'
import NavBar from 'components/NavBar'
import Button from 'components/Button'

interface OwnProps {
    liftId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class LiftDeleteContainer extends React.Component<Props> {
    private handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this lift?')) {
            this.props.deleteLift(this.props.liftId)
        }
    }

    public render() {
        return (
            <NavBar
                rightButton={
                    <Button
                        onClick={this.handleRemove}
                        danger={true}
                        disabled={this.props.isDeleting}
                        data-e2e="lift-button-delete"
                    >
                        Delete Lift
                    </Button>
                }
            />
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isDeleting:
        state.lifts.entitiesStatus[props.liftId] ===
        statusConstants.STATUS_DELETING
})

const mapDispatchToProps = {
    deleteLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftDeleteContainer)
