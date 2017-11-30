import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import { withRouter } from 'react-router-dom'

import { mount } from 'data/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'
import { logoutUser } from 'data/user/actions'
import { removeLoading } from 'data/ui/actions'

import ErrorApp from 'components/ErrorApp'
import Nav from 'components/Nav'
import Loading from 'components/Loading'

import 'scss/global.css'

class Layout extends Component {

    static propTypes = {
        header: PropTypes.node.isRequired,
        loader: PropTypes.func.isRequired,

        isAuthenticated: PropTypes.bool.isRequired,

        mount: PropTypes.func.isRequired,
        fetchRoutines: PropTypes.func.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        fetchExercises: PropTypes.func.isRequired,
        fetchLifts: PropTypes.func.isRequired,
        fetchSets: PropTypes.func.isRequired,
        logoutUser: PropTypes.func.isRequired,
        removeLoading: PropTypes.func.isRequired
    }

    state = {
        hasError: false,
        isLoading: true
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    componentWillMount() {
        this.props.mount()

        if (this.props.isAuthenticated) {
            this.fetchData()
        } else {
            this.setState({ isLoading: false })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.fetchData()
        }
    }

    fetchData = () => {
        Promise.all([
            this.props.fetchRoutines(),
            this.props.fetchWorkouts(),
            this.props.fetchExercises(),
            this.props.fetchLifts(),
            this.props.fetchSets()
        ]).then(() => {
            this.setState({ isLoading: false })
        })
    }

    handleLogoutUser = (event) => {
        event.preventDefault()

        this.props.logoutUser()
            .then(() => {
                this.props.history.push('/login')
            })
    }

    render() {
        const Container = Loadable({
            loader: this.props.loader,
            loading: Loading,
        })

        return (
            <Fragment>
                <Helmet>
                    {this.props.header}
                </Helmet>
                {this.state.isLoading ?
                    <Loading show /> :
                    <Fragment>
                        <Nav
                            isAuthenticated={this.props.isAuthenticated}
                            logoutUser={this.handleLogoutUser}
                        />
                        <div className="container">
                            {this.state.hasError ?
                                <ErrorApp /> :
                                <Container />
                            }
                        </div>
                    </Fragment>
                }
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
    logoutUser,
    removeLoading
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
