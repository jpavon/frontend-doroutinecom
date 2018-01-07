import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'

import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routinesSelector } from 'data/routines/selectors'
import { STATUS_LOADING } from 'data/utils'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'
import NoData from 'components/NoData'

class RoutinesContainer extends Component {

    static propTypes = {
        routines: PropTypes.array.isRequired,
        isStatusLoading: PropTypes.bool.isRequired,

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
            <Routines
                create={this.handleCreate}
                remove={this.props.removeRoutine}
                isStatusLoading={this.props.isStatusLoading}
            >
                {this.props.routines.length > 0 ?
                    this.props.routines.map((routine, i) => (
                        <Routine
                            key={routine.id}
                            routine={routine}
                        />
                    )) :
                    <NoData
                        buttonText="Create routine"
                        text="No routine created."
                        create={this.handleCreate}
                    />
                }
            </Routines>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routines: routinesSelector(props.blockId)(state),
    isStatusLoading: state.routines.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}


export default connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer)
