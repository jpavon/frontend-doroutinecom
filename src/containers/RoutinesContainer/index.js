import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'

import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routinesSelector } from 'data/routines/selectors'
import { STATUS_LOADING } from 'data/utils'
import { showAlert } from 'data/ui/actions'
import { fetchRoutinesData } from 'data/globals'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'
import NoData from 'components/NoData'

class RoutinesContainer extends Component {

    static propTypes = {
        routines: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired,
        fetchRoutinesData: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createRoutine()
            .then((resp) => {
                this.redirectOnCreate(resp)
            })
    }

    handleCreateType = (event) => {
        event.preventDefault()

        this.props.createRoutine({
            programId: this.programId.value,
            weightMeasure: this.weightMeasure.value,
            precision: this.precision.value,
            benchReps: this.benchReps.value,
            benchWeight: this.benchWeight.value,
            squatReps: this.squatReps.value,
            squatWeight: this.squatWeight.value,
            deadliftReps: this.deadliftReps.value,
            deadliftWeight: this.deadliftWeight.value,
            ohpReps: this.ohpReps.value,
            ohpWeight: this.ohpWeight.value
        }).then((resp) => {
            if (resp.error) {
                this.props.showAlert('error', resp.error.errors)
            } else {
                this.props.fetchRoutinesData()
                    .then(() => {
                        this.redirectOnCreate(resp)
                    })
            }
        })
    }

    redirectOnCreate = (resp) => {
        history.push(`/r/${resp.payload.slug}`)
    }

    setRef = (ref, name) => {
        this[name] = ref
    }

    render() {
        return (
            <Routines
                create={this.handleCreate}
                createType={this.handleCreateType}
                remove={this.props.removeRoutine}
                isLoading={this.props.isLoading}
                setRef={this.setRef}
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
                        text="No routine created"
                        create={this.handleCreate}
                    />
                }
            </Routines>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routines: routinesSelector(props.weekId)(state),
    isLoading: state.routines.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine,
    showAlert,
    fetchRoutinesData
}


export default connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer)
