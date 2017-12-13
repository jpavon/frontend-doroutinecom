import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'

import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routinesSelector } from 'data/routines/selectors'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'

class RoutinesContainer extends Component {

    static propTypes = {
        routines: PropTypes.array.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createRoutine()
            .then((resp) => {
                history.push(`/r/${resp.payload.slug}`)
            })
    }

    render() {
        return (
            <Routines handleCreate={this.handleCreate}>
                {this.props.routines.map((routine, i) => (
                    <Routine
                        key={routine.id}
                        routine={routine}
                    />
                ))}
            </Routines>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routines: routinesSelector(props.blockId)(state),
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}


export default connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer)
