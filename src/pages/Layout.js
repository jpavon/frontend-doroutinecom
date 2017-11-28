import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { mount } from 'data/actions'
import { fetchRoutines } from 'data/routines/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'

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
    }

    state = { hasError: false }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    componentWillMount() {
        this.props.mount()

        if (this.props.isAuthenticated) {
            this.fetchData()
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
            this.fetchData()
        }
    }

    fetchData = () => {
        this.props.fetchRoutines()
        this.props.fetchWorkouts()
        this.props.fetchExercises()
        this.props.fetchLifts()
        this.props.fetchSets()
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Layout title</title>
                </Helmet>
                <Nav />
                <div className="container">
                    {this.state.hasError ?
                        <NotFound /> :
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isAuthenticated: !!state.user.entity.id
})

const mapDispatchToProps = {
    mount,
    fetchRoutines,
    fetchWorkouts,
    fetchExercises,
    fetchLifts,
    fetchSets
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
