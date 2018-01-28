import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routineByIdSelector } from 'data/routines/selectors'
import { STATUS_LOADED } from 'data/utils'

// import LiftsContainer from 'containers/LiftsContainer'
import WorkoutsContainer from 'containers/RoutineContainer/WorkoutsContainer'
// import GraphContainer from 'containers/GraphContainer'

import Routine from 'components/Routine'

class RoutineContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        routine: PropTypes.object,
        isStatusLoaded: PropTypes.bool.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.routine) {
            history.push('/')
        }
    }

    handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this routine?')) {
            this.props.removeRoutine(this.props.routine.id)
                .then(() => {
                    history.push('/')
                })
        }
    }

    render() {
        return this.props.routine ?
            <Routine
                routine={this.props.routine}
                update={this.props.updateRoutine}
            >
                <WorkoutsContainer routineId={this.props.routine.id} />
            </Routine>
        : null
    }
}

const mapStateToProps = (state, props) => ({
    routine: routineByIdSelector(props.routineId)(state),
    isStatusLoaded: state.routines.fetchStatus === STATUS_LOADED,
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineContainer)
