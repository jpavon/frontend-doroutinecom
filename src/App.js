import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from 'data/user/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'
import { displayLoading, removeLoading } from 'data/ui/actions'
import { STATUS_LOADED } from 'data/shared'

import Routes from 'Routes'
import ErrorApp from 'components/ErrorApp'
import Nav from 'components/Nav'
import Loading from 'components/Loading'


class App extends Component {

    static propTypes = {
        isFetchRequired: PropTypes.bool.isRequired,
        isAuth: PropTypes.bool.isRequired,

        fetchUser: PropTypes.func.isRequired,
        fetchRoutines: PropTypes.func.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        fetchExercises: PropTypes.func.isRequired,
        fetchLifts: PropTypes.func.isRequired,
        fetchSets: PropTypes.func.isRequired,
        displayLoading: PropTypes.func.isRequired,
        removeLoading: PropTypes.func.isRequired
    }

    state = {
        isErrorApp: false,
        isLoading: true
    }

    componentDidCatch(error, info) {
        this.setState({ isErrorApp: true })
    }

    componentWillMount() {
        if (this.props.isFetchRequired && this.props.isAuth) {
            this.fetchData()
        }

        if (!this.props.isAuth) {
            this.props.removeLoading()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFetchRequired && nextProps.isAuth && (nextProps.isAuth !== this.props.isAuth)) {
            this.fetchData()
        }
    }

    fetchData = () => {
        this.props.displayLoading()

        Promise.all([
            this.props.fetchUser(),
            this.props.fetchRoutines(),
            this.props.fetchWorkouts(),
            this.props.fetchExercises(),
            this.props.fetchLifts(),
            this.props.fetchSets()
        ]).then(() => {
            this.props.removeLoading()
        })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    {this.props.header}
                </Helmet>
                <Nav
                    isAuth={this.props.isAuth}
                />
                {this.props.isLoading ?
                    <Loading show /> :
                    this.state.isErrorApp ?
                        <ErrorApp /> :
                        <Routes isAuth={this.props.isAuth} />
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetchRequired: !!(state.user.fetchStatus !== STATUS_LOADED),
    isAuth: state.user.isAuth,
    isLoading: state.ui.isLoading
})

const mapDispatchToProps = {
    fetchUser,
    fetchRoutines,
    fetchWorkouts,
    fetchExercises,
    fetchLifts,
    fetchSets,
    displayLoading,
    removeLoading
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
