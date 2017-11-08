import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { mount } from 'data/actions'
import { fetchWorkouts } from 'data/workouts/actions'
import { fetchExercises } from 'data/exercises/actions'
import { fetchLifts } from 'data/lifts/actions'
import { fetchSets } from 'data/sets/actions'


import Nav from 'components/Nav'

import 'scss/global.css'

class Layout extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        mount: PropTypes.func.isRequired,
        fetchWorkouts: PropTypes.func.isRequired,
        fetchExercises: PropTypes.func.isRequired,
        fetchLifts: PropTypes.func.isRequired,
        fetchSets: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    componentWillMount() {
        this.props.mount()
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
                    <div className="row">
                        {this.state.hasError ?
                            <h1>Something went wrong.</h1> :
                            this.props.children
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = {
    mount,
    fetchWorkouts,
    fetchExercises,
    fetchLifts,
    fetchSets
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
