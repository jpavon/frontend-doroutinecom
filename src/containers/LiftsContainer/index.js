import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { liftsRoutineSelector } from 'data/lifts/selectors'
import { createLift, updateLift, removeLift } from 'data/lifts/actions'
import { STATUS_DELETING } from 'data/utils'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'
import NoData from 'components/NoData'

class LiftsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        routine: PropTypes.object.isRequired,

        lifts: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

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
            <Lifts
                create={this.handleCreate}
                isLoading={this.props.isLoading}
            >
                {this.props.lifts.length > 0 ?
                    this.props.lifts.map((lift, i) => (
                        <Lift
                            key={lift.id}
                            lift={lift}
                            routine={this.props.routine}
                            ui={this.props.ui}
                            remove={this.handleRemove}
                            update={this.props.updateLift}
                            isDeleting={this.props.entitiesStatus[lift.id] === STATUS_DELETING}
                        />
                    )) :
                    <NoData
                        buttonText="Create lift"
                        text="No lift created"
                        create={this.handleCreate}
                    />
                }
            </Lifts>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lifts: liftsRoutineSelector(props.routineId)(state),
    entitiesStatus: state.lifts.entitiesStatus
})

const mapDispatchToProps = {
    updateLift,
    createLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)
