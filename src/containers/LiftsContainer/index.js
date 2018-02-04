import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { liftsSelector } from 'data/lifts/selectors'
import { createLift, updateLift, removeLift } from 'data/lifts/actions'
import { STATUS_LOADING } from 'data/utils'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'

class LiftsContainer extends Component {

    static propTypes = {
        lifts: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,

        createLift: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createLift()
            .then((resp) => {
                history.push(`/lifts/${resp.payload.id}`)
            })
    }

    handleRemove = (id) => {
        this.props.removeLift(id)
    }

    render() {
        return (
            <Fragment>
                <TopNav
                    title="Lifts"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate,
                        disabled: this.props.isLoading
                    }}
                />
                <Lifts
                    create={this.handleCreate}
                >
                    {this.props.lifts.length > 0 ?
                        this.props.lifts.map((lift, i) => (
                            <Lift
                                key={lift.id}
                                lift={lift}
                            />
                        )) :
                        <NoData
                            text="No lift created"
                        />
                    }
                </Lifts>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lifts: liftsSelector(state),
    isLoading: state.lifts.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps = {
    updateLift,
    createLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)
