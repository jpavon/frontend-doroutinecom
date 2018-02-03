import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'
import { topSetsSelector } from 'data/sets/selectors'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'
import SetsTable from 'components/SetsTable'

class ProfileContainer extends Component {

    static propTypes = {
        graphData: PropTypes.object.isRequired,
        topSets: PropTypes.array.isRequired,
        weightMeasure: PropTypes.string
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Profile"
                    rightLabel="Settings"
                    right={{
                        to: '/settings'
                    }}
                />
                <Profile>
                    <TopNav
                        title="Weekly Completed Workouts"
                    />
                    <Graph
                        data={this.props.graphData}
                    />
                    <TopNav
                        title="Recent Top Sets"
                    />
                    <SetsTable
                        sets={this.props.topSets}
                        weightMeasure={this.props.weightMeasure}
                        showLift
                    />
                </Profile>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    graphData: workoutsGraphDataSelector(state),
    topSets: topSetsSelector(state),
    weightMeasure: state.user.entity.weightMeasure
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
