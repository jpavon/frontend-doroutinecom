import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GraphContainer from 'containers/GraphContainer'

import TopNav from 'components/TopNav'

class ProfileContainer extends Component {

    static propTypes = {
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
                <TopNav
                    title="Weekly Completed Workouts"
                />
                <GraphContainer></GraphContainer>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
