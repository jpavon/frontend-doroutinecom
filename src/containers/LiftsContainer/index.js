import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { liftsSelector } from 'data/lifts/selectors'
import { createLift, updateLift, removeLift } from 'data/lifts/actions'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'

// temp put style in components
import '../HomeContainer/style.css'

class LiftsContainer extends Component {

    static propTypes = {
        ui: PropTypes.object.isRequired,
        lifts: PropTypes.array.isRequired,
        createLift: PropTypes.func.isRequired,
        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createLift()
    }

    handleRemove = (id) => {
        this.props.removeLift(id)
    }

    render() {
        return (
            <Lifts ui={this.props.ui} handleCreate={this.handleCreate}>
                {this.props.lifts.length > 0 && this.props.lifts.map((lift, i) => (
                    <Lift
                        key={i}
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
    lifts: liftsSelector(state),
    ui: state.ui
})

const mapDispatchToProps = {
    updateLift,
    createLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)
