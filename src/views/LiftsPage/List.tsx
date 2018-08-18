import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'

import { liftsSelector } from 'data/lifts/selectors'
import { postLift } from 'data/lifts/actions'
import { Status } from 'data/types'

import NoData from 'components/NoData'
import { Lifts, LiftListItem } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class List extends React.Component<Props> {
    public render() {
        return (
            <Lifts>
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
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    lifts: liftsSelector(state),
    isLoading: state.lifts.status === Status.STATUS_LOADING
})

const mapDispatchToProps = {
    postLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
