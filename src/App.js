import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from 'data/user/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'
import { showLoading, removeLoading } from 'data/ui/actions'

import Routes from 'Routes'
import ErrorApp from 'components/ErrorApp'
import Nav from 'components/Nav'
import Loading from 'components/Loading'
import Footer from 'components/Footer'

class App extends Component {

    static propTypes = {
        isFetchRequired: PropTypes.bool.isRequired,
        isAuth: PropTypes.bool.isRequired,
        isServerError: PropTypes.bool.isRequired,

        fetchUser: PropTypes.func.isRequired,
        fetchRoutines: PropTypes.func.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        fetchExercises: PropTypes.func.isRequired,
        fetchLifts: PropTypes.func.isRequired,
        fetchSets: PropTypes.func.isRequired,
        showLoading: PropTypes.func.isRequired,
        removeLoading: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        if (this.props.isFetchRequired && this.props.isAuth) {
            this.fetchData()
        }
    }

    state = {
        isErrorApp: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFetchRequired && nextProps.isAuth && !nextProps.isLoading) {
            this.fetchData()
        }

        if (nextProps.isServerError && nextProps.isServerError !== this.props.isServerError) {
            this.setState({ isErrorApp: true })
        }
    }

    componentDidCatch(error, info) {
        this.setState({ isErrorApp: true })
    }

    fetchData = () => {
        this.props.showLoading()

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
                <Nav
                    isAuth={this.props.isAuth}
                />
                {this.props.isLoading ?
                    <Loading /> :
                    this.state.isErrorApp ?
                        <ErrorApp /> :
                        <Fragment>
                            <Routes isAuth={this.props.isAuth} />
                            <Footer />
                        </Fragment>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetchRequired: Object.keys(state.user.entity).length === 0,
    isAuth: state.user.isAuth,
    isLoading: state.ui.isLoading,
    isServerError: state.ui.isServerError
})

const mapDispatchToProps = {
    fetchUser,
    fetchRoutines,
    fetchWorkouts,
    fetchExercises,
    fetchLifts,
    fetchSets,
    showLoading,
    removeLoading
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
