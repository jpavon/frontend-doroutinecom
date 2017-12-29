import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routineSelector } from 'data/routines/selectors'
import { STATUS_LOADED } from 'data/utils'

import LiftsContainer from 'containers/LiftsContainer'
import WorkoutsBlocksContainer from 'containers/WorkoutsBlocksContainer'

import RoutineSingle from 'components/Routines/RoutineSingle'

class RoutineContainer extends Component {

    static propTypes = {
        routineSlug: PropTypes.string.isRequired,

        routine: PropTypes.object,
        routineLoaded: PropTypes.bool.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.routineLoaded && !this.props.routine) {
            history.push('/')
        }
    }

    render() {
        return this.props.routine ?
            <RoutineSingle
                routine={this.props.routine}
                updateRoutine={this.props.updateRoutine}
                removeRoutine={this.props.removeRoutine}
            >
                <LiftsContainer routineId={this.props.routine.id} />
                <WorkoutsBlocksContainer routineId={this.props.routine.id} />
            </RoutineSingle>
        : null
    }
}

const mapStateToProps = (state, props) => ({
    routine: routineSelector(props.routineSlug)(state),
    routineLoaded: state.routines.fetchStatus === STATUS_LOADED
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineContainer)
