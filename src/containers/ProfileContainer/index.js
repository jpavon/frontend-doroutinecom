import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'
import { topSetsSelector } from 'data/sets/selectors'
import { WorkoutsGraphType } from 'data/graphs/types'
import { TopLiftSetsType } from 'data/sets/types'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'
import SetsTable from 'components/SetsTable'
import NoData from 'components/NoData'

class ProfileContainer extends Component {

    static propTypes = {
        workoutsGraphData: WorkoutsGraphType,
        topSets: TopLiftSetsType,
        weightMeasure: PropTypes.string
    }

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
                        weightMeasure={this.props.weightMeasure}
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

const mapStateToProps = (state, props) => ({
    workoutsGraphData: workoutsGraphDataSelector(state),
    topSets: topSetsSelector(state),
    weightMeasure: state.user.entity.weightMeasure
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
