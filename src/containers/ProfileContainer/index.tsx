import * as React from 'react'
import { connect } from 'react-redux'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'
import { topSetsSelector } from 'data/sets/selectors'

import { IRootState } from 'data/types'
import { ITopSet } from 'data/sets/types'
import { IWorkoutGraphData } from 'data/graphs/types'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'

interface IOwnProps {
}

interface IStateProps {
    workoutsGraphData: IWorkoutGraphData
    topSets: ITopSet[]
    user: IRootState['user']['entity']
}

interface IDispatchProps {
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class ProfileContainer extends React.Component<IProps> {

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

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    workoutsGraphData: workoutsGraphDataSelector(state),
    topSets: topSetsSelector(state),
    user: state.user.entity
})

// const mapDispatchToProps = {
// }

export default connect(mapStateToProps, null)(ProfileContainer)
