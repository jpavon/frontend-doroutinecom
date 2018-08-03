import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { topSetsForALiftSelector } from 'data/sets/selectors'
import { userSelector } from 'data/user/selectors'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'

interface OwnProps {
    liftId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class LiftSetsTableContainer extends React.Component<Props> {
    public render() {
        return this.props.user && this.props.topLiftSets.length > 0 ? (
            <SetsTable
                sets={this.props.topLiftSets}
                weightMeasure={this.props.user.weightMeasure}
                showLiftColumn={false}
            />
        ) : (
            <NoData text="List of top sets will be displayed here when you complete a workout." />
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    topLiftSets: topSetsForALiftSelector(props.liftId)(state),
    user: userSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftSetsTableContainer)
