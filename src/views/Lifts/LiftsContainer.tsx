import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'

import { liftsSelector } from 'data/lifts/selectors'
import { postLift } from 'data/lifts/actions'
import { statusConstants } from 'data/constants'

import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import { Lifts, LiftListItem } from 'views/Lifts/style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class LiftsContainer extends React.Component<Props> {
    private handleCreate = () => {
        this.props.postLift()
    }

    public render() {
        return (
            <>
                <NavBar
                    title="Lifts"
                    rightButton={
                        <Button
                            onClick={this.handleCreate}
                            disabled={this.props.isLoading}
                            data-e2e="lift-button-create"
                        >
                            Create
                        </Button>
                    }
                />
                <Lifts data-e2e="lifts">
                    {this.props.lifts.length > 0 ? (
                        this.props.lifts.map((lift, i) => (
                            <LiftListItem
                                key={lift.id}
                                to={`/lifts/${lift.id}`}
                                data-e2e="lift-list-item"
                            >
                                {lift.name || 'No lift name set.'}
                            </LiftListItem>
                        ))
                    ) : (
                        <NoData text="No lift created" />
                    )}
                </Lifts>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    lifts: liftsSelector(state),
    isLoading: state.lifts.status === statusConstants.STATUS_LOADING
})

const mapDispatchToProps = {
    postLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftsContainer)
