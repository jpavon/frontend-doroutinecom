import * as React from 'react'
import { connect } from 'react-redux'
import * as store from 'store'

import { IRootState } from 'data/types'
import { ITopSet } from 'data/sets/types'
import { IGraph } from 'data/graphs/types'
import { IFormatedUser } from 'data/user/types'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'
import {
    topSetsCompletedSelector,
    completedSetsSelector
} from 'data/sets/selectors'
import { userSelector } from 'data/user/selectors'
import {
    workoutsSelector,
    completedWorkoutsSelector
} from 'data/workouts/selectors'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'
import Start from 'components/Start'

interface IOwnProps {}

interface IStateProps {
    workoutsGraphData: IGraph
    topSets: ITopSet[]
    user: IFormatedUser | null
    hasWorkouts: boolean
    hasCompletedWorkouts: boolean
    hasCompletedSets: boolean
}

interface IDispatchProps {}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

interface IState {
    hideStartMessage: boolean
}

class ProfileContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            hideStartMessage: !!store.get('hideStartMessage')
        }
    }

    private hideStartMessage = () => {
        store.set('hideStartMessage', true)

        this.setState({
            hideStartMessage: true
        })
    }

    public render() {
        return this.props.user ? (
            <Profile>
                <TopNav
                    title="Profile"
                    rightLabel="Settings"
                    right={{
                        to: '/settings'
                    }}
                />
                <Start
                    hideStartMessage={this.hideStartMessage}
                    isHidden={this.state.hideStartMessage}
                    hasWorkouts={this.props.hasWorkouts}
                    hasCompletedWorkouts={this.props.hasCompletedWorkouts}
                    hasCompletedSets={this.props.hasCompletedSets}
                />
                <TopNav title="Weekly Workouts" />
                <Graph type="bar" data={this.props.workoutsGraphData} />
                <TopNav title="Recent Top Sets" />
                {this.props.topSets.length > 0 ? (
                    <SetsTable
                        sets={this.props.topSets}
                        weightMeasure={this.props.user.weightMeasure}
                        showLift={true}
                    />
                ) : (
                    <NoData text="List of top sets will be displayed here when you complete a workout." />
                )}
            </Profile>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    workoutsGraphData: workoutsGraphDataSelector(state),
    topSets: topSetsCompletedSelector(state),
    user: userSelector(state),
    hasWorkouts: workoutsSelector(state).length > 0,
    hasCompletedWorkouts: completedWorkoutsSelector(state).length > 0,
    hasCompletedSets: completedSetsSelector(state).length > 0
})

// const mapDispatchToProps = {
// }

export default connect(
    mapStateToProps,
    null
)(ProfileContainer)
