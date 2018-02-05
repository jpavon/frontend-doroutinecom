import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { pendingWorkoutsSelector } from 'data/workouts/selectors'

import Nav from 'components/Nav'
import NavNoAuth from 'components/NavNoAuth'

class NavContainer extends Component {

    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        isPendingWorkouts: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props)

        this.isTouchDevice = 'ontouchstart' in document.documentElement
    }

    render() {
        return this.props.isAuth ?
            <Nav
                isTouchDevice={this.isTouchDevice}
                isPendingWorkouts={this.props.isPendingWorkouts}
            /> :
            <NavNoAuth />
    }
}

const mapStateToProps = (state, props) => ({
    isPendingWorkouts: pendingWorkoutsSelector(state).length > 0
})

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))
