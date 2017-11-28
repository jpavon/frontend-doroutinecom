import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routineSelector } from 'data/routines/selectors'

import LiftsContainer from 'containers/LiftsContainer'
import BlocksContainer from 'containers/BlocksContainer'

import Button from 'components/Button'

class RoutineContainer extends Component {

    static propTypes = {
        routine: PropTypes.object.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <LiftsContainer routineId={this.props.routine.id} />
                <BlocksContainer routineId={this.props.routine.id} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routine: routineSelector(props.match.params.routineSlug)(state),
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutineContainer))
