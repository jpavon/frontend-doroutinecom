import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { mount } from 'data/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'
import { logoutUser } from 'data/user/actions'

import NotFound from 'components/NotFound'
import Nav from 'components/Nav'

import 'scss/global.css'

class Layout extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,

        mount: PropTypes.func.isRequired,
        fetchRoutines: PropTypes.func.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        fetchExercises: PropTypes.func.isRequired,
        fetchLifts: PropTypes.func.isRequired,
        fetchSets: PropTypes.func.isRequired,
        logoutUser: PropTypes.func.isRequired,
    }

    state = { hasError: false }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    componentWillMount() {
        this.props.mount()

        this.fetchData()
    }

    componentWillReceiveProps(nextProps) {
        console.log('here')
        this.fetchData()
    }

    fetchData = () => {
        if (this.props.isAuthenticated) {
            this.props.fetchRoutines()
            this.props.fetchWorkouts()
            this.props.fetchExercises()
            this.props.fetchLifts()
            this.props.fetchSets()
        }
    }

    handleLogoutUser = () => {
        //
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Layout title</title>
                </Helmet>
                <Nav
                    isAuthenticated={this.props.isAuthenticated}
                    logoutUser={this.props.logoutUser}
                />
                <div className="container">
                    {this.state.hasError ?
                        <NotFound /> :
                        this.props.children
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isAuthenticated: !!state.user.entity.id,
})

const mapDispatchToProps = {
    mount,
    fetchRoutines,
    fetchWorkouts,
    fetchExercises,
    fetchLifts,
    fetchSets,
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
