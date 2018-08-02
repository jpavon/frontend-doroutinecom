import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { topSetsCompletedSelector } from 'data/sets/selectors'
import { userSelector } from 'data/user/selectors'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class RecentTopSetsContainer extends React.Component<Props> {
    public render() {
        return this.props.topSets.length > 0 ? (
            <SetsTable
                sets={this.props.topSets}
                weightMeasure={
                    this.props.user ? this.props.user.weightMeasure : ''
                }
                showLiftColumn={true}
            />
        ) : (
            <NoData text="List of top sets will be displayed here when you complete a workout." />
        )
    }
}

const mapStateToProps = (state: IRootState, props: OwnProps) => ({
    topSets: topSetsCompletedSelector(state),
    user: userSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentTopSetsContainer)
