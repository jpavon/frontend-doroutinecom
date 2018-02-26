import * as React from 'react'
import { connect } from 'react-redux'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'
import { topSetsSelector } from 'data/sets/selectors'

import { RootState } from 'data/types'
import { ITopSet } from 'data/sets/types'
import { IWorkoutGraphData } from 'data/graphs/types'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'

interface OwnProps {
}

interface StateProps {
    workoutsGraphData: IWorkoutGraphData
    topSets: ITopSet[]
    user: RootState['user']['entity']
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps {}

class ProfileContainer extends React.Component<Props> {

    render() {
        return (
            <Profile>
                <TopNav
                    title="Profile"
                    rightLabel="Settings"
                    right={{
                        to: '/settings'
                    }}
                />
                <TopNav
                    title="Weekly Workouts"
                />
                <Graph
                    data={this.props.workoutsGraphData}
                />
                <TopNav
                    title="Recent Top Sets"
                />
                {this.props.topSets.length > 0 ?
                    <SetsTable
                        sets={this.props.topSets}
                        weightMeasure={this.props.user && this.props.user.weightMeasure}
                        showLift
                    /> :
                    <NoData
                        text="List of top sets will be displayed here when you complete a workout."
                    />
                }
            </Profile>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
    workoutsGraphData: workoutsGraphDataSelector(state),
    topSets: topSetsSelector(state),
    user: state.user.entity
})

// const mapDispatchToProps = {
// }

export default connect(mapStateToProps, null)(ProfileContainer)
