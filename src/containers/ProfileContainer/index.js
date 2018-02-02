import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { workoutsGraphDataSelector } from 'data/graphs/selectors'

import Profile from 'components/Profile'
import Graph from 'components/Graph'
import TopNav from 'components/TopNav'

class ProfileContainer extends Component {

    static propTypes = {
        graphData: PropTypes.object.isRequired
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
                {/*<TopNav
                    title="This Week"
                />*/}
                <Profile>
                    <TopNav
                        title="Recently Completed Workouts"
                    />
                    <Graph
                        data={this.props.graphData}
                    />
                </Profile>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    graphData: workoutsGraphDataSelector(state),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
