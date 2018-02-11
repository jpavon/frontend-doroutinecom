import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { createRoutine } from 'data/routines/actions'
import { routinesSelector, defaultRoutinesSelector } from 'data/routines/selectors'
import { STATUS_LOADING } from 'data/utils'
import { showAlert } from 'data/ui/actions'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Info from 'components/Info'

class RoutinesContainer extends Component {

    static propTypes = {
        routines: PropTypes.array.isRequired,
        defaultRoutines: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,

        createRoutine: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createRoutine()
            .then((resp) => {
                history.push(`/routines/${resp.payload.id}`)
            })
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Your Routines"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate,
                        disabled: this.props.isLoading,
                        className: 'routine-button-create'
                    }}
                />
                <Routines>
                    {this.props.routines.length > 0 ?
                        this.props.routines.map((routine, i) => (
                            <Routine
                                key={routine.id}
                                routine={routine}
                            />
                        )) :
                        <NoData
                            text="No routine created."
                        />
                    }
                </Routines>
                {this.props.defaultRoutines.length > 0 &&
                    <Fragment>
                        <TopNav
                            title="PPL"
                        />
                        <Info name="ppl" />
                        <Routines>
                            {this.props.defaultRoutines.map((routine, i) => (
                                <Routine
                                    key={routine.id}
                                    routine={routine}
                                />
                            ))}
                        </Routines>
                    </Fragment>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routines: routinesSelector(state),
    defaultRoutines: defaultRoutinesSelector(state),
    isLoading: state.routines.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps = {
    createRoutine,
    showAlert
}


export default connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer)
