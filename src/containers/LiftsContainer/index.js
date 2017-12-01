import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { liftsSelector } from 'data/lifts/selectors'
import { createLift, updateLift, removeLift } from 'data/lifts/actions'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'

class LiftsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        lifts: PropTypes.array.isRequired,

        createLift: PropTypes.func.isRequired,
        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createLift(this.props.routineId)
    }

    handleRemove = (id) => {
        this.props.removeLift(id)
    }

    render() {
        return (
            <Lifts ui={this.props.ui} handleCreate={this.handleCreate}>
                {this.props.lifts.length > 0 && this.props.lifts.map((lift, i) => (
                    <Lift
                        key={lift.id}
                        lift={lift}
                        ui={this.props.ui}
                        handleRemove={this.handleRemove}
                        updateLift={this.props.updateLift}
                    />
                ))}
            </Lifts>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lifts: liftsSelector(props.routineId)(state)
})

const mapDispatchToProps = {
    updateLift,
    createLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)
